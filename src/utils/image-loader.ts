const type: 'hhi' | 'covered' = 'hhi'; // should be based on env variable once we reuse this function

interface ImageProps extends HTMLImageElement {
  quality?: number;
}

export default function myImageLoader({ src, width, quality = 75 }: ImageProps) {
  const oldbase = 'https://system.huishurenibiza.nl/uploads/photos/';
  const newBase = `https://ik.imagekit.io/xt92rycergjd/${type}/tr:w-${width},q-${quality}/`;

  return src.replace(oldbase, newBase);
}
