/** Best available Gemini image model (Nano Banana 2). Override via GEMINI_IMAGE_MODEL in .env */
export const GEMINI_IMAGE_MODEL =
  process.env.GEMINI_IMAGE_MODEL || 'gemini-3.1-flash-image';

/** 16:9 landscape — matches project card aspect-video and avoids square crop clipping */
export const geminiImageGenerationConfig = {
  responseModalities: ['IMAGE'],
  imageConfig: {
    aspectRatio: '16:9',
  },
} as const;
