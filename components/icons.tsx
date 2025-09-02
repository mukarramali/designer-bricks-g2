
import React from 'react';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.651 4.39 1.88 6.223l.244.433-1.152 4.205 4.352-1.141.415.244zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export const HamburgerIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.415 2.175 8.796 2.163 12 2.163zm0 1.802c-3.142 0-3.502.011-4.72.068-2.695.123-3.996 1.426-4.12 4.12C3.11 9.49 3.1 9.85 3.1 12s.011 2.51.068 3.72c.123 2.695 1.426 3.996 4.12 4.12 1.218.057 1.578.068 4.72.068s3.502-.011 4.72-.068c2.695-.123 3.996-1.426 4.12-4.12.057-1.21.068-1.57.068-3.72s-.011-2.51-.068-3.72c-.123-2.695-1.426-3.996-4.12-4.12C15.502 3.976 15.142 3.965 12 3.965zM12 6.837a5.163 5.163 0 100 10.326 5.163 5.163 0 000-10.326zm0 8.526a3.363 3.363 0 110-6.726 3.363 3.363 0 010 6.726zM17.487 7.42a1.262 1.262 0 11-2.525 0 1.262 1.262 0 012.525 0z" clipRule="evenodd" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const QuoteIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.16,1A8.16,8.16,0,0,0,1,9.16V23.84A8.16,8.16,0,0,0,9.16,32h8.68V16.23H9.16V9.16h8.68V1Z" />
        <path d="M22.84,1A8.16,8.16,0,0,0,14.68,9.16V23.84A8.16,8.16,0,0,0,22.84,32h8.68V16.23H22.84V9.16h8.68V1Z" />
    </svg>
);

const IconBase: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    {children}
  </svg>
);

export const ArchitectureIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6M9 15.75h6" />
  </IconBase>
);

export const ConstructionIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4-2.4 3 3 0 00-1.128-5.78 2.25 2.25 0 012.4-2.4 3 3 0 005.78-1.128 2.25 2.25 0 012.4 2.4 3 3 0 001.128 5.78 2.25 2.25 0 01-2.4 2.4 3 3 0 00-5.78 1.128zM15.75 5.25v2.25l1.5 1.5v2.25l1.5 1.5v2.25l1.5 1.5V21h-2.25v-2.25l-1.5-1.5V15l-1.5-1.5V9l-1.5-1.5V5.25h2.25z" />
  </IconBase>
);

export const ZeroSurprisesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
  </IconBase>
);

export const LookBookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </IconBase>
);

export const AppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
  </IconBase>
);

export const AccountabilityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662s.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.21.138-2.43.138-3.662z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v-1.5a3 3 0 013-3h.015M12 12v-1.5a3 3 0 00-3-3H8.985M12 12v4.5A1.5 1.5 0 0110.5 18h-3a1.5 1.5 0 01-1.5-1.5v-4.5M12 12h4.5a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-4.5" />
  </IconBase>
);

export const ScopeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </IconBase>
);

export const PriceIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-1.5h5.25m-5.25 0h5.25m0 0h5.25m-5.25 0h5.25M3.75 6H7.5v3.75H3.75V6zM3.75 14.25H7.5v3.75H3.75v-3.75z" />
  </IconBase>
);

export const ComfortIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5-1.5-.5M5.25 6.364l7.5 2.727M21 9.75l-4.5-1.636M16.5 3.5l-1.5.5" />
  </IconBase>
);

export const TeamIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.952a4.5 4.5 0 015.654 0M12 10.5h.008v.008H12v-.008zM12 15a2.25 2.25 0 01-2.25-2.25c0-1.172.69-2.159 1.67-2.61a3.75 3.75 0 114.16 0c.98.45 1.67 1.438 1.67 2.61A2.25 2.25 0 0112 15z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 4.5a4.5 4.5 0 00-4.5-4.5V12a4.5 4.5 0 004.5 4.5z" />
  </IconBase>
);

export const HandoverChecklistIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </IconBase>
);

export const WarrantyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </IconBase>
);
