interface ComplaintsSectionHeaderProps {
  title: string;
  description?: string;
}

const ComplaintsSectionHeader = ({
  title,
  description,
}: ComplaintsSectionHeaderProps) => (
  <div className="bg-[#f8fbff] px-6 pt-4 pb-2 border-b border-gray-200">
    <h1 className="text-base font-semibold text-gray-900">{title}</h1>
    {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
  </div>
);

export default ComplaintsSectionHeader;
