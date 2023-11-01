const NameAndRole = () => {
  return (
    <div className="w-[164px] h-[42px]">
      <p className="fixed top-0 left-0 [font-family:'Inter-Bold',Helvetica] font-normal text-sky-700 text-[14px] tracking-[-0.35px] leading-[21px]">
        <span className="font-[number:var(--body-b2-font-weight)] font-body-b2 [font-style:var(--body-b2-font-style)] tracking-[var(--body-b2-letter-spacing)] leading-[var(--body-b2-line-height)] text-[length:var(--body-b2-font-size)]">
          Ini Nama Lengkap Admin
          <br />
        </span>
        <span className="font-body-p2 [font-style:var(--body-p2-font-style)] font-[number:var(--body-p2-font-weight)] tracking-[var(--body-p2-letter-spacing)] leading-[var(--body-p2-line-height)] text-[length:var(--body-p2-font-size)]">
          Super Admin
        </span>
      </p>
    </div>
  );
};
export default NameAndRole;
