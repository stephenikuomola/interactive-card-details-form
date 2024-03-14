# Card Details style-guide

The project was built to be responsive across all devices. 

- Mobile
- Tablet
- Desktop

## Colors

```css
--blue: hsl(249, 99%, 64%); 
--purple: hsl(278, 94%, 30%); 
--red: hsl(0, 100%, 66%); 
--white: hsl(0, 0%, 100%); 
--light-grayish-violet: hsl(270, 3%, 87%); 
--dark-grayish-violet: hsl(279, 6%, 55%); 
--very-dark-violet: hsl(278, 68%, 11%); 
```

## Gap

```css
--gap-0: 0px;
--gap-1: 1px;
--gap-1_25: 0.125rem;
--gap-2_5: 0.25rem;
--gap-3_75: 0.375rem;
--gap-5: 0.5rem;
--gap-6_25: 0.625rem;
--gap-7_5: 0.75rem;
--gap-8_75: 0.875rem;
--gap-10: 1rem;
--gap-12_5: 1.25rem;
--gap-15: 1.5rem;
--gap-17_5: 1.75rem;
--gap-20: 2rem;
--gap-22_5: 2.25rem;
--gap-27_5: 2.75rem;
--gap-30: 3rem;
--gap-35: 3.5rem;
--gap-40: 4rem;
--gap-50: 5rem;
--gap-60: 6rem;
--gap-70: 7rem;
--gap-80: 8rem;
--gap-90: 9rem;
--gap-100: 10rem;
--gap-110: 11rem;
--gap-120: 12rem;
--gap-130: 13rem;
--gap-140: 14rem;
--gap-150: 15rem;
--gap-160: 16rem;
--gap-180: 18rem;
--gap-200: 20rem;
--gap-240: 24rem;
```

## Display

```css
--hidden: none;
--block: block;
--inline: inline;
--inline-block: inline-block;
--flex: flex;
--inline-flex: inline-flex;
--grid: grid;
--inline-grid: inline-grid;
```

## Radius

```css
--radius-1: 2px;
--radius-2: 4px;
--radius-3: 6px;
--radius-4: 8px;
--radius-5: 10px; 
--radius-6: 12px;
--radius-7: 16px;
--radius-8: 20px;
--radius-9: 24px;
--radius-10: 26px;
--radius-11: 28px;
--radius-12: 30px;
--radius-13: 32px;
--radius-14: 34px;
--radius-15: 36px;
--radius-16: 38px;
--radius-17: 40px;
```

## Typography

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
```

```css
--ff-space-grotesk-sans-serif: var(--ff-space-grotesk), sans-serif;
--ff-space-grotesk: 'Space Grotesk';
--fw-100: 100;
--fw-200: 200;
--fw-300: 300;
--fw-400: 400;
--fw-500: 500;
--fw-600: 600;
--fw-700: 700;
--fw-800: 800;
--font-style: normal; 
--line-height-none: 1;
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;
--letter-spacing-tighter: -0.05em;
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0em;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
--letter-spacing-widest: 0.1em;

/* Font Sizes */
--font-size-0: clamp(0.5625rem, 0.5031rem + 0.4132vi, 0.875rem);
--font-size-1: clamp(0.6328rem, 0.566rem + 0.4649vi, 0.9844rem);
--font-size-2: clamp(0.7119rem, 0.6367rem + 0.523vi, 1.1074rem);
--font-size-3: clamp(0.8009rem, 0.7163rem + 0.5884vi, 1.2458rem);
--font-size-4: clamp(0.901rem, 0.8059rem + 0.6619vi, 1.4016rem);
--font-size-5: clamp(1.0136rem, 0.9066rem + 0.7446vi, 1.5768rem);
--font-size-6: clamp(1.1403rem, 1.0199rem + 0.8377vi, 1.7739rem);
```

## Spacing

```css
--space-3xs: clamp(0.125rem, 0.1012rem + 0.1653vi, 0.25rem);
--space-2xs: clamp(0.3125rem, 0.2887rem + 0.1653vi, 0.4375rem);
--space-xs: clamp(0.4375rem, 0.39rem + 0.3306vi, 0.6875rem);
--space-s: clamp(0.5625rem, 0.5031rem + 0.4132vi, 0.875rem);
--space-m: clamp(0.875rem, 0.7918rem + 0.5785vi, 1.3125rem);
--space-l: clamp(1.125rem, 1.0062rem + 0.8264vi, 1.75rem);
--space-xl: clamp(1.6875rem, 1.5093rem + 1.2397vi, 2.625rem);
--space-2xl: clamp(2.25rem, 2.0124rem + 1.6529vi, 3.5rem);
--space-3xl: clamp(3.375rem, 3.0186rem + 2.4793vi, 5.25rem);
--space-3xs-2xs: clamp(0.125rem, 0.0656rem + 0.4132vi, 0.4375rem);
--space-2xs-xs: clamp(0.3125rem, 0.2412rem + 0.4959vi, 0.6875rem);
--space-xs-s: clamp(0.4375rem, 0.3543rem + 0.5785vi, 0.875rem);
--space-s-m: clamp(0.5625rem, 0.4199rem + 0.9917vi, 1.3125rem);
--space-m-l: clamp(0.875rem, 0.7087rem + 1.157vi, 1.75rem);
--space-l-xl: clamp(1.125rem, 0.8399rem + 1.9835vi, 2.625rem);
--space-xl-2xl: clamp(1.6875rem, 1.343rem + 2.3967vi, 3.5rem);
--space-2xl-3xl: clamp(2.25rem, 1.6798rem + 3.9669vi, 5.25rem);
--space-xs-m: clamp(0.4375rem, 0.2712rem + 1.157vi, 1.3125rem);
--space-m-xl: clamp(0.875rem, 0.5424rem + 2.314vi, 2.625rem);
--space-l-2xl: clamp(1.125rem, 0.6736rem + 3.1405vi, 3.5rem);
--space-xl-3xl: clamp(1.6875rem, 1.0103rem + 4.7107vi, 5.25rem);
```