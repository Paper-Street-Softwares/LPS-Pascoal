import { Phone, Mail } from "lucide-react";

export default function TeamMember({ img, alt, name, phone, email }) {
  return (
    <div className="flex flex-col items-center text-center font-secondFont mx-auto">
      {/* Foto */}
      <img
        src={img}
        alt={alt}
        width={260}
        height={260}
        className="w-[260px] h-[260px] rounded-full object-cover"
      />

      {/* Nome */}
      <h2 className="mt-6 text-[16px] font-medium text-orange-600">{name}</h2>

      {/* Telefone */}
      <div className="flex items-center gap-2 font-light text-sm mt-0 text-gray-600">
        <Phone size={16} />
        <span>{phone}</span>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2 text-sm mt-0 font-light text-gray-600">
        <Mail size={16} />
        <span>{email}</span>
      </div>
    </div>
  );
}
