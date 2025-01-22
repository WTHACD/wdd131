
from colorsys import rgb_to_hls, hls_to_rgb

# Function to calculate relative luminance
def relative_luminance(color):
    rgb = [c / 255.0 for c in color]
    rgb = [(c / 12.92) if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4 for c in rgb]
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]

# Function to calculate contrast ratio
def contrast_ratio(color1, color2):
    l1 = relative_luminance(color1)
    l2 = relative_luminance(color2)
    l1, l2 = max(l1, l2), min(l1, l2)
    return (l1 + 0.05) / (l2 + 0.05)

# Convert HEX to RGB
def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    if len(hex_color) != 6:
        raise ValueError(f"Invalid HEX color: {hex_color}")
    return tuple(int(hex_color[i:i + 2], 16) for i in (0, 2, 4))
text_color = "#777777"  # Ensure it's a valid 6-character HEX
bg_color = "#702963"
# Adjust colors to meet contrast ratio
try:
    aa_compliant = adjust_contrast(text_color, bg_color, 4.5)
    aaa_compliant = adjust_contrast(text_color, bg_color, 7.0)
    aa_compliant, aaa_compliant
except Exception as e:
    str(e)

    # Adjust luminance of the foreground color until the contrast meets the target ratio
    if contrast >= target_ratio:
        return fg_color

    fg_hls = rgb_to_hls(*[c / 255.0 for c in fg_rgb])
    bg_luminance = relative_luminance(bg_rgb)
    target_luminance = (bg_luminance + 0.05) * target_ratio - 0.05

    # Modify lightness to achieve the target contrast
    new_lightness = max(0, min(1, target_luminance))
    new_fg_hls = (fg_hls[0], new_lightness, fg_hls[2])
    new_fg_rgb = hls_to_rgb(*new_fg_hls)
    new_fg_rgb = tuple(int(c * 255) for c in new_fg_rgb)
    return f"#{new_fg_rgb[0]:02x}{new_fg_rgb[1]:02x}{new_fg_rgb[2]:02x}"

# Current colors
text_color = "#777"
bg_color = "#702963"

# Adjust text color for AA and AAA levels
aa_compliant = adjust_contrast(text_color, bg_color, 4.5)
aaa_compliant = adjust_contrast(text_color, bg_color, 7.0)

aa_compliant, aaa_compliant


# Debugging the issue by ensuring hex color inputs are valid and non-empty

# Convert HEX to RGB
def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    if len(hex_color) != 6:
        raise ValueError(f"Invalid HEX color: {hex_color}")
    return tuple(int(hex_color[i:i + 2], 16) for i in (0, 2, 4))

# Re-define text and background colors to ensure proper handling
text_color = "#777777"  # Ensure it's a valid 6-character HEX
bg_color = "#702963"

# Adjust text color for AA and AAA levels again
try:
    aa_compliant = adjust_contrast(text_color, bg_color, 4.5)
    aaa_compliant = adjust_contrast(text_color, bg_color, 7.0)
    aa_compliant, aaa_compliant
except Exception as e:
    str(e)

# Correct implementation for contrast adjustment
def adjust_color_for_contrast(fg_color, bg_color, target_ratio):
    fg_rgb = hex_to_rgb(fg_color)
    bg_rgb = hex_to_rgb(bg_color)
    fg_luminance = relative_luminance(fg_rgb)
    bg_luminance = relative_luminance(bg_rgb)
    contrast = contrast_ratio(fg_rgb, bg_rgb)
    
    # If already compliant, return the same color
    if contrast >= target_ratio:
        return fg_color

    # Adjust lightness in HLS to achieve contrast
    fg_hls = rgb_to_hls(*[c / 255.0 for c in fg_rgb])
    bg_lightness = rgb_to_hls(*[c / 255.0 for c in bg_rgb])[1]
    new_lightness = max(0, min(1, bg_lightness + (target_ratio - contrast) * 0.1))
    adjusted_hls = (fg_hls[0], new_lightness, fg_hls[2])
    adjusted_rgb = hls_to_rgb(*adjusted_hls)
    adjusted_rgb = tuple(int(c * 255) for c in adjusted_rgb)
    return f"#{adjusted_rgb[0]:02x}{adjusted_rgb[1]:02x}{adjusted_rgb[2]:02x}"

# Calculate compliant colors
aa_compliant = adjust_color_for_contrast(text_color, bg_color, 4.5)
aaa_compliant = adjust_color_for_contrast(text_color, bg_color, 7.0)
aa_compliant, aaa_compliant
