#!/usr/bin/env python3
"""
Generates public/og-default.png (1200x630) — the Open Graph card.

This is a one-off brand asset, not part of the site build. It is kept in the
repo so the card can be regenerated if the palette, wordmark or tagline change.

Requires: pillow, fonttools, brotli (only the last two to convert the bundled
Inter woff2 into a TTF that Pillow can read).

    pip install pillow fonttools brotli
    python3 scripts/generate-og.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og-default.png"
FONT_SRC = ROOT / "node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2"
FONT_DIR = Path("/tmp/ce-og-fonts")

# Palette — mirrors src/styles/global.css
MINT = (232, 241, 240)
MINT_DEEP = (220, 235, 233)
TEAL = (0, 72, 71)
TEAL_SOFT = (11, 95, 92)
INK = (28, 43, 42)
INK_MUTED = (92, 110, 108)
CYAN = (96, 186, 206)
CORAL = (246, 185, 179)
CHIP = (229, 235, 233)
CHIP_TEXT = (63, 90, 88)
WHITE = (255, 255, 255)

W, H = 1200, 630


def load_fonts() -> dict[str, ImageFont.FreeTypeFont]:
    FONT_DIR.mkdir(parents=True, exist_ok=True)
    fonts = {}
    for weight, name in ((400, "Regular"), (600, "SemiBold"), (700, "Bold")):
        target = FONT_DIR / f"Inter-{name}.ttf"
        if not target.exists():
            font = TTFont(FONT_SRC)
            font.flavor = None
            instantiateVariableFont(font, {"wght": weight}, inplace=True)
            font.save(target)
        fonts[name] = target
    return {
        "regular": ImageFont.truetype(str(fonts["Regular"]), 26),
        "semi_small": ImageFont.truetype(str(fonts["SemiBold"]), 18),
        "semi": ImageFont.truetype(str(fonts["SemiBold"]), 23),
        "brand": ImageFont.truetype(str(fonts["SemiBold"]), 46),
        "bold": ImageFont.truetype(str(fonts["Bold"]), 54),
        "meta": ImageFont.truetype(str(fonts["Regular"]), 22),
    }


def rounded(draw, box, radius, fill):
    draw.rounded_rectangle(box, radius=radius, fill=fill)


def bookmark_glyph(draw, x, y, size, colour):
    """The same bookmark mark used in the site header and favicon."""
    w = size * 0.46
    h = size * 0.60
    left = x + (size - w) / 2
    top = y + (size - h) / 2
    right = left + w
    bottom = top + h
    cx = x + size / 2
    # Outline of the bookmark: top edge, right edge, notch, left edge.
    draw.line(
        [
            (left, top),
            (right, top),
            (right, bottom),
            (cx, bottom - h * 0.30),
            (left, bottom),
            (left, top),
        ],
        fill=colour,
        width=max(3, int(size * 0.085)),
        joint="curve",
    )


def draw_dots(draw, x, y, cols, rows, spacing, r, colour):
    for row in range(rows):
        for col in range(cols):
            cx, cy = x + col * spacing, y + row * spacing
            draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=colour)


def draw_zigzag(draw, x, y, segments, step, height, colour, width):
    points = []
    for i in range(segments + 1):
        points.append((x + i * step, y + (height if i % 2 else 0)))
    draw.line(points, fill=colour, width=width, joint="curve")


def main():
    fonts = load_fonts()

    # Scale up and downsample for smooth edges — Pillow has no antialiased shapes.
    S = 2
    img = Image.new("RGB", (W * S, H * S), MINT)
    draw = ImageDraw.Draw(img)

    def sc(*vals):
        return [v * S for v in vals]

    # --- canvas ornaments -------------------------------------------------
    draw_dots(draw, W * 0.945 * S, 96 * S, 3, 7, 32 * S, 7 * S, CYAN)
    # coral chevron, partially off the left edge, like the site canvas
    for dy in (0, 34):
        pass
    draw.line(
        [(-18 * S, 300 * S), (34 * S, 352 * S), (-18 * S, 404 * S)],
        fill=CORAL,
        width=int(14 * S),
        joint="curve",
    )
    # quotation marks, top centre
    for dx in (0, 44):
        draw.rounded_rectangle(
            sc(468 + dx, 34, 496 + dx, 78), radius=int(13 * S), fill=CYAN
        )

    # --- panel ------------------------------------------------------------
    shadow = Image.new("RGBA", img.size, (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.rounded_rectangle(
        sc(76, 96, 1124, 600), radius=int(30 * S), fill=(16, 60, 56, 46)
    )
    from PIL import ImageFilter

    shadow = shadow.filter(ImageFilter.GaussianBlur(18 * S))
    img.paste(Image.alpha_composite(img.convert("RGBA"), shadow).convert("RGB"), (0, 0))

    draw = ImageDraw.Draw(img)
    rounded(draw, sc(70, 84, 1130, 590), int(30 * S), WHITE)

    # --- brand ------------------------------------------------------------
    tile = sc(118, 130, 190, 202)
    rounded(draw, tile, int(18 * S), TEAL)
    bookmark_glyph(draw, 118 * S, 130 * S, 72 * S, MINT)

    draw.text((214 * S, 150 * S), "Connect Everything", font=_scale(fonts["brand"], S), fill=INK)

    # --- headline ---------------------------------------------------------
    draw.text(
        (118 * S, 262 * S),
        "The internet's useful bits,",
        font=_scale(fonts["bold"], S),
        fill=INK,
    )
    draw.text(
        (118 * S, 326 * S),
        "picked one at a time.",
        font=_scale(fonts["bold"], S),
        fill=INK,
    )

    draw.text(
        (118 * S, 410 * S),
        "Websites, tools, tutorials and references worth keeping.",
        font=_scale(fonts["regular"], S),
        fill=INK_MUTED,
    )

    # --- chips ------------------------------------------------------------
    chips = ["No accounts", "No ads", "Just useful things"]
    x = 118
    for label in chips:
        f = _scale(fonts["semi_small"], S)
        tw = draw.textlength(label, font=f) / S
        pad_x, h = 18, 40
        rounded(draw, sc(x, 468, x + tw + pad_x * 2, 468 + h), int(12 * S), CHIP)
        draw.text((x * S + pad_x * S, 478 * S), label, font=f, fill=CHIP_TEXT)
        x += tw + pad_x * 2 + 14

    # --- footer -----------------------------------------------------------
    draw.text(
        (118 * S, 540 * S),
        "Browse, search, click straight through.",
        font=_scale(fonts["meta"], S),
        fill=INK_MUTED,
    )

    img = img.resize((W, H), Image.LANCZOS)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT} ({OUT.stat().st_size // 1024} KB)")


def _scale(font, factor):
    """Pillow fonts are absolute; rebuild one at the scaled size."""
    return ImageFont.truetype(font.path, int(font.size * factor))


if __name__ == "__main__":
    main()
