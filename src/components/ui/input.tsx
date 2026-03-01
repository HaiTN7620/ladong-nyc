export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  return <input {...props} className="w-full border border-neutral-300 p-3" />;
}
