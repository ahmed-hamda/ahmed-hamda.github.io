
from pathlib import Path
import fitz

# Project directories
ROOT = Path(__file__).resolve().parent
PDF_PATH = ROOT / "All-Certificates.pdf"
OUTPUT_DIR = ROOT / "public" / "images" / "certifications"

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

if not PDF_PATH.exists():
    raise FileNotFoundError(
        f"PDF not found: {PDF_PATH}"
    )

# Open the certificate collection
with fitz.open(PDF_PATH) as document:
    print(f"Found {len(document)} pages.")

    for index, page in enumerate(document, start=1):
        # Render at 2x resolution for clear previews
        pixmap = page.get_pixmap(
            matrix=fitz.Matrix(2, 2),
            alpha=False,
        )

        output_path = OUTPUT_DIR / f"certificate-{index:02d}.png"
        pixmap.save(str(output_path))

        print(f"Created: {output_path.name}")

print("Certificate conversion completed!")
