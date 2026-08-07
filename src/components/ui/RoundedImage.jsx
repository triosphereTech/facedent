import Image from "next/image";

const RoundedImage = ({
  src,
  alt,
  className = "",
  imageClassName = "",
  sizes = "100vw",
  priority = false,
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-[#dbe7ea] bg-[#f8fbfb] shadow-[0_18px_45px_-34px_rgba(14,42,71,0.55)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${imageClassName}`}
      />
    </div>
  );
};

export default RoundedImage;
