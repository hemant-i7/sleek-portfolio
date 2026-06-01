#!/usr/bin/env python3
"""
Download Instagram reels for the portfolio content carousel.

Requires: pip install yt-dlp
Run from repo root: python3 scripts/download-instagram-reels.py
"""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
OUTPUT_DIR = REPO_ROOT / "public" / "reels"

REELS = [
    {
        "id": "DYHqmklt8AE",
        "url": "https://www.instagram.com/reel/DYHqmklt8AE/",
        "filename": "n8n-workflow.mp4",
    },
    {
        "id": "DRooMxEjYYe",
        "url": "https://www.instagram.com/reel/DRooMxEjYYe/",
        "filename": "automation-tips.mp4",
    },
    {
        "id": "DU8yOatjeBI",
        "url": "https://www.instagram.com/reel/DU8yOatjeBI/",
        "filename": "creator-reel.mp4",
    },
]


def ensure_yt_dlp() -> str:
    try:
        subprocess.run(
            ["yt-dlp", "--version"],
            check=True,
            capture_output=True,
            text=True,
        )
        return "yt-dlp"
    except (subprocess.CalledProcessError, FileNotFoundError):
        pass

    try:
        subprocess.run(
            [sys.executable, "-m", "yt_dlp", "--version"],
            check=True,
            capture_output=True,
            text=True,
        )
        return f"{sys.executable} -m yt_dlp"
    except (subprocess.CalledProcessError, FileNotFoundError):
        print(
            "yt-dlp is required. Install with:\n"
            "  pip install yt-dlp\n"
            "  # or: brew install yt-dlp",
            file=sys.stderr,
        )
        sys.exit(1)


def download_reel(yt_dlp_cmd: str, reel: dict) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    out_path = OUTPUT_DIR / reel["filename"]

    if out_path.exists() and out_path.stat().st_size > 0:
        print(f"Skip (exists): {out_path.name}")
        return

    print(f"Downloading {reel['id']} -> {out_path.name} ...")

    cmd = [
        *yt_dlp_cmd.split(),
        reel["url"],
        "-f",
        "best[ext=mp4]/best",
        "--no-playlist",
        "--merge-output-format",
        "mp4",
        "-o",
        str(out_path),
        "--no-warnings",
        "--retries",
        "3",
    ]

    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(result.stderr or result.stdout, file=sys.stderr)
        raise SystemExit(f"Failed to download {reel['url']}")

    if not out_path.exists():
        # yt-dlp may add extension; pick newest mp4 matching stem
        candidates = list(OUTPUT_DIR.glob(f"{out_path.stem}*"))
        mp4s = [p for p in candidates if p.suffix == ".mp4"]
        if mp4s:
            mp4s[0].rename(out_path)
        else:
            raise SystemExit(f"Expected file missing: {out_path}")

    size_mb = out_path.stat().st_size / (1024 * 1024)
    print(f"Done: {out_path.name} ({size_mb:.1f} MB)")


def main() -> None:
    yt_dlp = ensure_yt_dlp()
    print(f"Output: {OUTPUT_DIR}\n")
    for reel in REELS:
        download_reel(yt_dlp, reel)
    print("\nAll reels ready under public/reels/")


if __name__ == "__main__":
    main()
