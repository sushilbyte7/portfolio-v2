type TechTagProps = {
  children: string;
  size?: "sm" | "xs";
};

export default function TechTag({ children, size = "sm" }: TechTagProps) {
  return <span className={`tech-tag tech-tag--${size}`}>{children}</span>;
}
