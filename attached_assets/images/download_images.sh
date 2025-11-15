#!/bin/bash

# Function to download and rename image
download_image() {
    url="$1"
    filename=$(basename "$url" | sed 's/%20/-/g')
    echo "Downloading: $filename"
    curl -s -L -o "$filename" "$url" 2>/dev/null
    if [ $? -eq 0 ] && [ -s "$filename" ]; then
        echo "✓ $filename"
    else
        echo "✗ Failed: $filename"
        rm -f "$filename"
    fi
}

# Download logos
download_image "https://www.tampalandprep.com/wp-content/uploads/2024/12/TampaLandPrep-Logo-1.png"
download_image "https://www.tampalandprep.com/wp-content/uploads/2024/11/logo-green.png"
download_image "https://www.tampalandprep.com/wp-content/uploads/2024/12/cropped-TampaLandPrep-Logo-1-1-e1734453846275.png"

# Download favicons
download_image "https://www.tampalandprep.com/wp-content/uploads/2024/12/android-chrome-512x512-1.png"
download_image "https://www.tampalandprep.com/wp-content/uploads/2024/12/favicon-32x32-1.png"

# Download service images
download_image "https://www.tampalandprep.com/wp-content/uploads/2025/01/land-clearing.jpg"
download_image "https://www.tampalandprep.com/wp-content/uploads/2025/01/grading-levelling.jpg"
download_image "https://www.tampalandprep.com/wp-content/uploads/2025/01/brush-removal.jpg"
download_image "https://www.tampalandprep.com/wp-content/uploads/2025/01/soil-compaction.jpg"
download_image "https://www.tampalandprep.com/wp-content/uploads/2025/05/driveway-prep.png"

# Download material icons
download_image "https://www.tampalandprep.com/wp-content/uploads/2025/01/asphalt.png"
download_image "https://www.tampalandprep.com/wp-content/uploads/2025/01/brick.png"
download_image "https://www.tampalandprep.com/wp-content/uploads/2025/01/gravel.png"

# Download gallery/slider images
download_image "https://www.tampalandprep.com/wp-content/uploads/2024/12/pic-1.png"
download_image "https://www.tampalandprep.com/wp-content/uploads/2024/12/pic-2.png"
download_image "https://www.tampalandprep.com/wp-content/uploads/2024/12/pic-3.png"
download_image "https://www.tampalandprep.com/wp-content/uploads/2024/12/pic-4.png"

# Download additional images
download_image "https://www.tampalandprep.com/wp-content/uploads/2024/12/Tampa-Fla.webp"
download_image "https://www.tampalandprep.com/wp-content/uploads/2024/12/land-clearing.png"
download_image "https://www.tampalandprep.com/wp-content/uploads/2025/01/construction-worker.webp"
download_image "https://www.tampalandprep.com/wp-content/uploads/2024/12/arable_agriculture_agricultural_tractor_agricultural_agro_photo_agrartechnik_agricultural_economics_cultivation-1208095.jpg"

echo ""
echo "Download complete! Total images:"
ls -1 | wc -l
