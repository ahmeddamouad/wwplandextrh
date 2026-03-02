import { ReactNode } from 'react';

interface ZigzagSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  illustration: ReactNode;
  reverse?: boolean;
  bgColor?: 'background' | 'secondary' | string;
}

const ZigzagSection = ({
  id,
  title,
  subtitle,
  children,
  illustration,
  reverse = false,
  bgColor = 'background',
}: ZigzagSectionProps) => {
  const getBgStyle = () => {
    if (bgColor === 'secondary') return 'bg-secondary';
    if (bgColor === 'background') return 'bg-background';
    return '';
  };

  const getInlineStyle = () => {
    if (bgColor !== 'secondary' && bgColor !== 'background') {
      return { background: bgColor };
    }
    return {};
  };

  return (
    <section
      id={id}
      className={`section-padding ${getBgStyle()}`}
      style={getInlineStyle()}
    >
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div className={`space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground w-full">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base sm:text-lg text-muted-foreground w-full">
                {subtitle}
              </p>
            )}
            <div className="space-y-4 w-full">
              {children}
            </div>
          </div>

          {/* Illustration */}
          <div className={`relative ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            {illustration}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZigzagSection;
