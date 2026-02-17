# Resume (LaTeX)

To regenerate the PDF from the LaTeX source:

```bash
cd resume
pdflatex Hemant_Kadam_Resume.tex
```

Then copy the generated `Hemant_Kadam_Resume.pdf` to `public/` (e.g. as `public/Hemant_Kadam_Resume.pdf`) if you want the site to serve it, or upload to Google Drive and update `src/config/Resume.ts` with the new preview URL.
