type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const breakpoint: Record<BreakpointKey, number> = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export const mediaBreakpoint = Object.keys(breakpoint).reduce(
  (prev, curr) => ({
    ...prev,
    [curr]: `@media (min-width: ${breakpoint[curr as BreakpointKey] || 0}px)`,
  }),
  {}
) as Record<BreakpointKey, string>;
