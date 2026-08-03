/* @ds-bundle: {"format":4,"namespace":"DesignSystem_d5d132","components":[{"name":"CtaBand","sourcePath":"components/content/CtaBand.jsx"},{"name":"FaqAccordion","sourcePath":"components/content/FaqAccordion.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"Notice","sourcePath":"components/content/Notice.jsx"},{"name":"PriceCard","sourcePath":"components/content/PriceCard.jsx"},{"name":"ProductCard","sourcePath":"components/content/ProductCard.jsx"},{"name":"SpecTable","sourcePath":"components/content/SpecTable.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"StepFlow","sourcePath":"components/content/StepFlow.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"MediaPlaceholder","sourcePath":"components/core/MediaPlaceholder.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"CategoryTabs","sourcePath":"components/navigation/CategoryTabs.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"UtilityBar","sourcePath":"components/navigation/UtilityBar.jsx"}],"sourceHashes":{"components/content/CtaBand.jsx":"93330ef4e0bc","components/content/FaqAccordion.jsx":"28b7255ed361","components/content/FeatureCard.jsx":"76880515ab47","components/content/Notice.jsx":"3e573f9279a5","components/content/PriceCard.jsx":"96f33cb227c6","components/content/ProductCard.jsx":"42dc39732cc3","components/content/SpecTable.jsx":"ba669bcc4095","components/content/StatBlock.jsx":"f5834e8fc1df","components/content/StepFlow.jsx":"01c99550c9f7","components/core/Badge.jsx":"dda12d23882a","components/core/Button.jsx":"28eece6cb1f6","components/core/Card.jsx":"a50680e7f38e","components/core/Icon.jsx":"c9926b21d91e","components/core/Logo.jsx":"79c80cb93c84","components/core/MediaPlaceholder.jsx":"8dfa2c06db05","components/core/SectionHeading.jsx":"821bc12f72a0","components/core/Tag.jsx":"617b5d4d0f6c","components/forms/Checkbox.jsx":"af6e0ec18c6e","components/forms/FormField.jsx":"0a8c51ea515e","components/forms/Input.jsx":"3b5708c506be","components/forms/Radio.jsx":"1c951a53891c","components/forms/Select.jsx":"e162f0257059","components/forms/Textarea.jsx":"8d94be89f70f","components/navigation/Breadcrumb.jsx":"dae8972c4c14","components/navigation/CategoryTabs.jsx":"b20a76a75d63","components/navigation/SiteFooter.jsx":"4d3c4b9b5082","components/navigation/SiteHeader.jsx":"9c938993fc1f","components/navigation/UtilityBar.jsx":"d2bd8dea09b1","ui_kits/website/CaseDetailScreen.jsx":"d6e564809284","ui_kits/website/CasesScreen.jsx":"23fa26ea1d35","ui_kits/website/CompanyScreen.jsx":"91f56c2d8e0f","ui_kits/website/ContactScreen.jsx":"dcdcc4bcfe4a","ui_kits/website/FaqScreen.jsx":"d9c4b3d94b43","ui_kits/website/FlowScreen.jsx":"a2219c7faffc","ui_kits/website/HomeScreen.jsx":"b1c2e7d2af60","ui_kits/website/ProductDetailScreen.jsx":"1708fd74ea9b","ui_kits/website/ProductsScreen.jsx":"670960ce5642","ui_kits/website/RelatedScreen.jsx":"91587fd5740a","ui_kits/website/SupportScreen.jsx":"0e815f810a6e","ui_kits/website/ThanksScreen.jsx":"49068b0fc5df","ui_kits/website/data.jsx":"e036659131a7","ui_kits/website/parts.jsx":"48aa93220370"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_d5d132 = window.DesignSystem_d5d132 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/FaqAccordion.jsx
try { (() => {
function FaqAccordion({
  items = [],
  defaultOpen = 0,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return React.createElement('div', {
    className: 'nk-faq',
    style: {
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-canvas)',
      ...style
    },
    ...rest
  }, items.map((it, i) => {
    const isOpen = open === i;
    return React.createElement('div', {
      key: i,
      style: {
        borderTop: i ? '1px solid var(--border-hairline)' : 'none'
      }
    }, React.createElement('button', {
      type: 'button',
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '20px 24px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-text)',
        fontSize: 'var(--fs-body-md)',
        fontWeight: 500,
        letterSpacing: 'var(--ls-body)',
        color: 'var(--text-body)'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        color: 'var(--color-primary)',
        flex: '0 0 auto'
      }
    }, 'Q'), React.createElement('span', {
      style: {
        flex: 1
      }
    }, it.q), React.createElement('span', {
      'aria-hidden': true,
      style: {
        width: 10,
        height: 10,
        flex: '0 0 auto',
        borderRight: '2px solid var(--ink-600)',
        borderBottom: '2px solid var(--ink-600)',
        transform: isOpen ? 'rotate(-135deg) translate(-3px,-3px)' : 'rotate(45deg) translateY(-3px)',
        transition: 'transform var(--dur-base) var(--ease-standard)'
      }
    })), isOpen ? React.createElement('div', {
      style: {
        display: 'flex',
        gap: 16,
        padding: '0 24px 24px 24px'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        color: 'var(--text-faint)',
        flex: '0 0 auto'
      }
    }, 'A'), React.createElement('p', {
      style: {
        margin: 0,
        fontSize: 'var(--fs-body-sm)',
        lineHeight: 'var(--lh-body)',
        letterSpacing: 'var(--ls-body)',
        color: 'var(--text-muted)'
      }
    }, it.a)) : null);
  }));
}
Object.assign(__ds_scope, { FaqAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqAccordion.jsx", error: String((e && e.message) || e) }); }

// components/content/SpecTable.jsx
try { (() => {
function SpecTable({
  rows = [],
  caption,
  dense = false,
  style,
  ...rest
}) {
  const pad = dense ? '10px 16px' : '14px 20px';
  return React.createElement('div', {
    className: 'nk-spec',
    style: {
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-canvas)',
      ...style
    },
    ...rest
  }, caption ? React.createElement('div', {
    style: {
      padding: pad,
      background: 'var(--surface-fog)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-caption-md)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-heading)'
    }
  }, caption) : null, React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--fs-caption-md)',
      lineHeight: 1.7
    }
  }, React.createElement('tbody', null, rows.map((r, i) => React.createElement('tr', {
    key: i,
    style: {
      borderTop: i || caption ? '1px solid var(--border-hairline)' : 'none'
    }
  }, React.createElement('th', {
    style: {
      textAlign: 'left',
      verticalAlign: 'top',
      width: '34%',
      padding: pad,
      background: 'var(--surface-mist)',
      fontWeight: 500,
      color: 'var(--text-muted)',
      letterSpacing: 'var(--ls-body)'
    }
  }, r.label), React.createElement('td', {
    style: {
      padding: pad,
      fontFamily: r.mono === false ? 'var(--font-text)' : 'var(--font-mono)',
      color: 'var(--text-body)',
      letterSpacing: '.01em'
    }
  }, r.value))))));
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SpecTable.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function StatBlock({
  stats = [],
  onSlab = false,
  style,
  ...rest
}) {
  return React.createElement('div', {
    className: 'nk-stats',
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
      gap: 'var(--space-gutter)',
      ...style
    },
    ...rest
  }, stats.map((s, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      paddingLeft: 'var(--space-20)',
      borderLeft: '2px solid ' + (onSlab ? 'var(--color-primary-bright)' : 'var(--color-primary)')
    }
  }, React.createElement('span', {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      letterSpacing: 'var(--ls-caption)',
      color: onSlab ? 'var(--text-on-slab-muted)' : 'var(--text-muted)'
    }
  }, s.label), React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-md)',
      fontWeight: 700,
      lineHeight: 1.2,
      color: onSlab ? 'var(--white)' : 'var(--ink-900)'
    }
  }, s.value, s.unit ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 500,
      color: onSlab ? 'var(--text-on-slab-muted)' : 'var(--text-muted)'
    }
  }, s.unit) : null))));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/StepFlow.jsx
try { (() => {
function StepFlow({
  steps = [],
  style,
  ...rest
}) {
  return React.createElement('ol', {
    className: 'nk-steps',
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))',
      gap: 'var(--space-gutter)',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      ...style
    },
    ...rest
  }, steps.map((s, i) => React.createElement('li', {
    key: i,
    style: {
      background: 'var(--surface-canvas)',
      border: '1px solid var(--border-hairline)',
      borderTop: '3px solid var(--color-primary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-24)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-caption-sm)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-caption)',
      color: 'var(--color-primary)'
    }
  }, 'STEP ' + String(i + 1).padStart(2, '0')), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-xs)',
      fontWeight: 700,
      lineHeight: 'var(--lh-heading)'
    }
  }, s.title), React.createElement('span', {
    style: {
      fontSize: 'var(--fs-caption-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, s.body))));
}
Object.assign(__ds_scope, { StepFlow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepFlow.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  primary: {
    background: 'var(--color-primary-soft)',
    color: 'var(--blue-800)',
    border: '1px solid transparent'
  },
  ink: {
    background: 'var(--ink-900)',
    color: 'var(--white)',
    border: '1px solid var(--ink-900)'
  },
  outline: {
    background: 'var(--surface-canvas)',
    color: 'var(--ink-900)',
    border: '1px solid var(--ink-900)'
  },
  alert: {
    background: 'var(--status-alert-bg)',
    color: 'var(--status-alert)',
    border: '1px solid transparent'
  },
  warn: {
    background: 'var(--status-warn-bg)',
    color: 'var(--status-warn)',
    border: '1px solid transparent'
  },
  ok: {
    background: 'var(--status-ok-bg)',
    color: 'var(--status-ok)',
    border: '1px solid transparent'
  },
  slab: {
    background: 'rgba(255,255,255,.12)',
    color: 'var(--white)',
    border: '1px solid var(--border-on-slab)'
  }
};
function Badge({
  tone = 'primary',
  children,
  style,
  ...rest
}) {
  return React.createElement('span', {
    className: 'nk-badge',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-caption-sm)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-caption)',
      lineHeight: 1.5,
      whiteSpace: 'nowrap',
      ...TONES[tone],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    height: 36,
    padding: '0 16px',
    fontSize: 'var(--fs-button-sm)',
    gap: 6
  },
  md: {
    height: 44,
    padding: '0 24px',
    fontSize: 'var(--fs-button-md)',
    gap: 8
  },
  lg: {
    height: 52,
    padding: '0 32px',
    fontSize: 'var(--fs-body-md)',
    gap: 10
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--text-on-primary)',
    border: '1px solid var(--color-primary)'
  },
  ink: {
    background: 'var(--ink-900)',
    color: 'var(--white)',
    border: '1px solid var(--ink-900)'
  },
  outline: {
    background: 'var(--surface-canvas)',
    color: 'var(--color-primary)',
    border: '1px solid var(--color-primary)'
  },
  'outline-ink': {
    background: 'var(--surface-canvas)',
    color: 'var(--ink-900)',
    border: '1px solid var(--ink-900)'
  },
  'on-slab': {
    background: 'var(--color-primary-bright)',
    color: 'var(--ink-900)',
    border: '1px solid var(--color-primary-bright)'
  },
  'outline-slab': {
    background: 'transparent',
    color: 'var(--white)',
    border: '1px solid var(--border-on-slab)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: '1px solid transparent'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  children,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  href,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md,
    v = VARIANTS[variant] || VARIANTS.primary;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontFamily: 'var(--font-text)',
    fontSize: s.fontSize,
    fontWeight: 'var(--fw-bold)',
    letterSpacing: 'var(--ls-button)',
    lineHeight: 1,
    borderRadius: 'var(--radius-md)',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap',
    transition: 'var(--transition-base)',
    width: fullWidth ? '100%' : undefined,
    boxSizing: 'border-box',
    ...v,
    ...(disabled ? {
      background: variant === 'outline' || variant === 'outline-ink' || variant === 'outline-slab' || variant === 'ghost' ? 'transparent' : 'var(--ink-300)',
      color: 'var(--ink-500)',
      borderColor: variant === 'ghost' ? 'transparent' : 'var(--ink-300)'
    } : null),
    ...style
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return React.createElement(Tag, {
    className: 'nk-button',
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    type: Tag === 'button' ? type : undefined,
    style: base,
    ...rest
  }, iconLeft, React.createElement('span', null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/CtaBand.jsx
try { (() => {
function CtaBand({
  title = '現場の水、どう抜くか迷ったらご相談ください。',
  lead = '口径・水質・排水距離をお聞かせいただければ、最適な機種と台数をその場でご提案します。',
  tel = '0166-34-2311',
  hours = '受付 8:00–20:00（年中無休）',
  markSrc = 'assets/logo-mark.png',
  primaryLabel = '無料で見積もりを依頼',
  secondaryLabel = '資料をダウンロード',
  onPrimary,
  onSecondary,
  style,
  ...rest
}) {
  return React.createElement('section', {
    className: 'nk-cta',
    style: {
      position: 'relative',
      background: 'var(--surface-slab)',
      color: 'var(--text-on-slab)',
      overflow: 'hidden',
      ...style
    },
    ...rest
  }, markSrc ? React.createElement('img', {
    src: markSrc,
    alt: '',
    style: {
      position: 'absolute',
      right: -60,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 420,
      opacity: .08,
      pointerEvents: 'none'
    }
  }) : null, React.createElement('div', {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--gutter-page)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-40)',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)',
      maxWidth: 640
    }
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-lg)',
      fontWeight: 700,
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--white)',
      margin: 0
    }
  }, title), React.createElement('p', {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-on-slab-muted)'
    }
  }, lead)), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)',
      minWidth: 280
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, React.createElement('span', {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-on-slab-muted)',
      letterSpacing: 'var(--ls-caption)'
    }
  }, 'お電話でのご相談'), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-display-md)',
      fontWeight: 500,
      color: 'var(--color-primary-bright)',
      lineHeight: 1.2
    }
  }, tel), React.createElement('span', {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-on-slab-muted)'
    }
  }, hours)), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-12)',
      flexWrap: 'wrap'
    }
  }, React.createElement(__ds_scope.Button, {
    variant: 'on-slab',
    size: 'lg',
    onClick: onPrimary
  }, primaryLabel), secondaryLabel ? React.createElement(__ds_scope.Button, {
    variant: 'outline-slab',
    size: 'lg',
    onClick: onSecondary
  }, secondaryLabel) : null))));
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/content/PriceCard.jsx
try { (() => {
function PriceCard({
  name,
  summary,
  price,
  unit = '／日（税抜）',
  features = [],
  featured = false,
  ctaLabel = 'この条件で見積もる',
  onSelect,
  style,
  ...rest
}) {
  return React.createElement('div', {
    className: 'nk-price',
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-card-lg)',
      boxShadow: 'var(--shadow-lift)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-20)',
      borderTop: featured ? '4px solid var(--color-primary)' : '4px solid var(--border-hairline)',
      boxSizing: 'border-box',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 700,
      margin: 0,
      lineHeight: 1.4
    }
  }, name), featured ? React.createElement(__ds_scope.Badge, {
    tone: 'primary'
  }, '人気') : null), summary ? React.createElement('p', {
    style: {
      margin: 0,
      fontSize: 'var(--fs-caption-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, summary) : null, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-md)',
      fontWeight: 700,
      color: featured ? 'var(--color-primary)' : 'var(--ink-900)',
      lineHeight: 1.1
    }
  }, price), React.createElement('span', {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-muted)'
    }
  }, unit)), React.createElement('ul', {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 'var(--space-20)'
    }
  }, features.map((x, i) => React.createElement('li', {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 'var(--fs-caption-md)',
      lineHeight: 1.8,
      color: 'var(--text-body)'
    }
  }, React.createElement('span', {
    'aria-hidden': true,
    style: {
      color: 'var(--color-primary)',
      fontWeight: 700
    }
  }, '・'), x))), React.createElement(__ds_scope.Button, {
    variant: featured ? 'primary' : 'outline',
    fullWidth: true,
    onClick: onSelect,
    style: {
      marginTop: 'auto'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const SURFACES = {
  card: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)'
  },
  mist: {
    background: 'var(--surface-mist)',
    color: 'var(--text-body)'
  },
  tint: {
    background: 'var(--surface-tint)',
    color: 'var(--text-body)'
  },
  slab: {
    background: 'var(--surface-slab)',
    color: 'var(--text-on-slab)'
  }
};
function Card({
  surface = 'card',
  elevated = true,
  bordered = false,
  padding = 'var(--space-card)',
  children,
  style,
  ...rest
}) {
  return React.createElement('div', {
    className: 'nk-card',
    style: {
      borderRadius: 'var(--radius-xl)',
      padding,
      boxShadow: elevated ? 'var(--shadow-lift)' : 'none',
      border: bordered ? '1px solid var(--border-hairline)' : 'none',
      boxSizing: 'border-box',
      ...SURFACES[surface],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* Lucide（CDN）のグリフを描く薄いラッパー。ページ側で
   <script src="https://unpkg.com/lucide@0.474.0/dist/umd/lucide.js"></script> を読み込むこと。 */
function Icon({
  name,
  size = 20,
  stroke = 1.75,
  color = 'currentColor',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const icons = window.lucide.icons || {};
    const key = name.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
    const node = icons[key];
    if (!node) return;
    const svg = window.lucide.createElement(node);
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('stroke-width', stroke);
    svg.setAttribute('stroke', color);
    el.appendChild(svg);
  }, [name, size, stroke, color]);
  return React.createElement('span', {
    ref,
    'aria-hidden': true,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      color,
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
function FeatureCard({
  icon = 'droplets',
  title,
  body,
  index,
  surface = 'card',
  style,
  ...rest
}) {
  const bg = surface === 'mist' ? 'var(--surface-mist)' : 'var(--surface-card)';
  return React.createElement('div', {
    className: 'nk-feature',
    style: {
      background: bg,
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-card-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)',
      border: '1px solid var(--border-hairline)',
      boxSizing: 'border-box',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement('span', {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--color-primary-faint)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: 'var(--color-primary)'
  })), index != null ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-faint)'
    }
  }, String(index).padStart(2, '0')) : null), React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 700,
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-heading)',
      margin: 0
    }
  }, title), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      letterSpacing: 'var(--ls-body)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, body));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Notice.jsx
try { (() => {
const TONES = {
  info: {
    bg: 'var(--color-primary-faint)',
    fg: 'var(--blue-800)',
    bd: 'var(--blue-200)',
    icon: 'info'
  },
  warn: {
    bg: 'var(--status-warn-bg)',
    fg: 'var(--status-warn)',
    bd: '#ecd6a8',
    icon: 'triangle-alert'
  },
  alert: {
    bg: 'var(--status-alert-bg)',
    fg: 'var(--status-alert)',
    bd: '#f0c8c3',
    icon: 'octagon-alert'
  },
  ok: {
    bg: 'var(--status-ok-bg)',
    fg: 'var(--status-ok)',
    bd: '#bfe3d3',
    icon: 'circle-check'
  }
};
function Notice({
  tone = 'info',
  title,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return React.createElement('div', {
    className: 'nk-notice',
    style: {
      display: 'flex',
      gap: 12,
      padding: '16px 20px',
      background: t.bg,
      border: '1px solid ' + t.bd,
      borderRadius: 'var(--radius-lg)',
      boxSizing: 'border-box',
      ...style
    },
    ...rest
  }, React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    color: t.fg,
    style: {
      marginTop: 2
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, title ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 700,
      color: t.fg
    }
  }, title) : null, React.createElement('div', {
    style: {
      fontSize: 'var(--fs-caption-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Notice.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const SRC = {
  lockup: {
    light: 'lockup',
    dark: 'lockup-on-dark'
  },
  stacked: {
    light: 'stacked',
    dark: 'stacked-on-dark'
  },
  mark: {
    light: 'mark',
    dark: 'mark'
  }
};
function Logo({
  variant = 'lockup',
  onDark = false,
  height = 36,
  assetBase = 'assets',
  src,
  alt = '株式会社水のナカセ',
  style,
  ...rest
}) {
  const name = (SRC[variant] || SRC.lockup)[onDark ? 'dark' : 'light'];
  return React.createElement('img', {
    src: src || assetBase + '/logo-' + name + '.png',
    alt,
    style: {
      height,
      width: 'auto',
      maxWidth: '100%',
      objectFit: 'contain',
      alignSelf: 'flex-start',
      flex: '0 0 auto',
      display: 'block',
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/MediaPlaceholder.jsx
try { (() => {
function MediaPlaceholder({
  ratio = '16 / 9',
  label = '写真',
  note,
  tone = 'mist',
  radius = 'var(--radius-xl)',
  src,
  alt = '',
  fit = 'cover',
  position = 'center',
  style,
  ...rest
}) {
  if (src) return React.createElement('img', {
    src,
    alt,
    className: 'nk-media',
    style: {
      width: '100%',
      aspectRatio: ratio,
      objectFit: fit,
      objectPosition: position,
      borderRadius: radius,
      display: 'block',
      background: fit === 'contain' ? 'var(--surface-canvas)' : 'var(--surface-mist)',
      ...style
    },
    ...rest
  });
  const slab = tone === 'slab';
  const bg = slab ? 'var(--surface-slab-soft)' : tone === 'tint' ? 'var(--surface-tint)' : 'var(--surface-mist)';
  const fg = slab ? 'rgba(255,255,255,.55)' : 'var(--text-faint)';
  return React.createElement('div', {
    className: 'nk-media nk-slot',
    style: {
      width: '100%',
      aspectRatio: ratio,
      borderRadius: radius,
      background: bg,
      border: '1px dashed ' + (slab ? 'rgba(255,255,255,.24)' : 'var(--border-strong)'),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      padding: 'var(--space-16)',
      textAlign: 'center',
      color: fg,
      fontFamily: 'var(--font-text)',
      boxSizing: 'border-box',
      ...style
    },
    ...rest
  }, React.createElement('svg', {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  }, React.createElement('path', {
    d: 'M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z'
  }), React.createElement('circle', {
    cx: 12,
    cy: 13,
    r: 3.2
  })), React.createElement('span', {
    style: {
      fontSize: 'var(--fs-caption-md)',
      lineHeight: 1.6
    }
  }, label), note ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      opacity: .8,
      lineHeight: 1.6
    }
  }, note) : null);
}
Object.assign(__ds_scope, { MediaPlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MediaPlaceholder.jsx", error: String((e && e.message) || e) }); }

// components/content/ProductCard.jsx
try { (() => {
function ProductCard({
  name,
  model,
  image,
  imageFit = 'contain',
  imageLabel = '機材写真',
  imageNote = '撮影待ち',
  badge,
  badgeTone = 'ok',
  specs = [],
  price,
  priceNote = '／日（税抜）',
  quoteNote = 'レンタル料金はお見積もり',
  ctaLabel = 'この機材について相談する',
  onSelect,
  style,
  ...rest
}) {
  return React.createElement(__ds_scope.Card, {
    padding: 'var(--space-16)',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, React.createElement(__ds_scope.MediaPlaceholder, {
    ratio: '1 / 1',
    label: imageLabel,
    note: image ? undefined : imageNote,
    src: image,
    fit: imageFit,
    radius: 'var(--radius-lg)',
    style: image ? {
      border: '1px solid var(--border-hairline)'
    } : null
  }), badge ? React.createElement('div', {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, React.createElement(__ds_scope.Badge, {
    tone: badgeTone
  }, badge)) : null), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, model ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-muted)',
      letterSpacing: '.02em'
    }
  }, model) : null, React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-xs)',
      fontWeight: 700,
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-heading)',
      margin: 0
    }
  }, name)), specs.length ? React.createElement('dl', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '6px 16px',
      margin: 0,
      fontSize: 'var(--fs-caption-md)',
      lineHeight: 1.6
    }
  }, specs.flatMap((s, i) => [React.createElement('dt', {
    key: 't' + i,
    style: {
      color: 'var(--text-muted)',
      margin: 0
    }
  }, s.label), React.createElement('dd', {
    key: 'd' + i,
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-body)'
    }
  }, s.value)])) : null, React.createElement('div', {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 'var(--space-12)'
    }
  }, price ? [React.createElement('span', {
    key: 'p',
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-data-lg)',
      fontWeight: 700,
      color: 'var(--ink-900)',
      lineHeight: 1.1
    }
  }, price), React.createElement('span', {
    key: 'n',
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-muted)'
    }
  }, priceNote)] : React.createElement('span', {
    style: {
      fontSize: 'var(--fs-caption-md)',
      color: 'var(--text-muted)'
    }
  }, quoteNote)), React.createElement(__ds_scope.Button, {
    variant: 'outline-ink',
    size: 'md',
    fullWidth: true,
    onClick: onSelect
  }, ctaLabel)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  onSlab = false,
  rule = true,
  as = 'h2',
  style,
  ...rest
}) {
  const color = onSlab ? 'var(--text-on-slab)' : 'var(--text-heading)';
  return React.createElement('div', {
    className: 'nk-section-heading',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? 'var(--container-text)' : undefined,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    },
    ...rest
  }, eyebrow ? React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-caption-md)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-caption)',
      color: onSlab ? 'var(--color-primary-bright)' : 'var(--color-primary)',
      lineHeight: 1.4
    }
  }, rule ? React.createElement('span', {
    style: {
      width: 28,
      height: 'var(--rule-accent)',
      borderRadius: 2,
      background: onSlab ? 'var(--color-primary-bright)' : 'var(--color-primary)'
    }
  }) : null, eyebrow) : null, React.createElement(as, {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-lg)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-heading)',
      color,
      margin: 0
    }
  }, title), lead ? React.createElement('p', {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body-md)',
      lineHeight: 'var(--lh-body)',
      letterSpacing: 'var(--ls-body)',
      color: onSlab ? 'var(--text-on-slab-muted)' : 'var(--text-muted)',
      maxWidth: 'var(--container-text)'
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const clickable = Boolean(onClick);
  return React.createElement(clickable ? 'button' : 'span', {
    className: 'nk-tag',
    onClick,
    type: clickable ? 'button' : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 18px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-caption-md)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-body)',
      lineHeight: 1.4,
      background: active ? 'var(--ink-900)' : 'var(--surface-canvas)',
      color: active ? 'var(--white)' : 'var(--ink-700)',
      border: '1px solid ' + (active ? 'var(--ink-900)' : 'var(--border-strong)'),
      cursor: clickable ? 'pointer' : 'default',
      transition: 'var(--transition-base)',
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-body)',
      color: disabled ? 'var(--text-faint)' : 'var(--text-body)',
      ...style
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    defaultChecked,
    onChange,
    disabled,
    style: {
      width: 20,
      height: 20,
      marginTop: 2,
      accentColor: 'var(--color-primary)',
      flex: '0 0 auto',
      cursor: 'inherit'
    },
    ...rest
  }), label ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function FormField({
  label,
  required = false,
  help,
  error,
  children,
  style,
  ...rest
}) {
  return React.createElement('div', {
    className: 'nk-field',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    },
    ...rest
  }, label ? React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-caption-md)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-body)',
      color: 'var(--text-body)'
    }
  }, label, required ? React.createElement('span', {
    style: {
      background: 'var(--status-alert-bg)',
      color: 'var(--status-alert)',
      fontSize: 'var(--fs-caption-sm)',
      fontWeight: 'var(--fw-bold)',
      padding: '2px 6px',
      borderRadius: 'var(--radius-xs)',
      letterSpacing: 'var(--ls-caption)'
    }
  }, '必須') : null) : null, children, help && !error ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.7
    }
  }, help) : null, error ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--status-alert)',
      lineHeight: 1.7
    }
  }, error) : null);
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  invalid = false,
  disabled = false,
  type = 'text',
  prefix,
  suffix,
  style,
  ...rest
}) {
  const field = React.createElement('input', {
    type,
    disabled,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: 48,
      padding: '0 14px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body-md)',
      letterSpacing: 'var(--ls-body)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--surface-mist)' : 'var(--surface-canvas)',
      border: '1px solid ' + (invalid ? 'var(--status-alert)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-md)',
      transition: 'var(--transition-base)',
      ...style
    },
    ...rest
  });
  if (!prefix && !suffix) return field;
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width: '100%'
    }
  }, prefix ? React.createElement('span', {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-caption-md)'
    }
  }, prefix) : null, field, suffix ? React.createElement('span', {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-caption-md)',
      whiteSpace: 'nowrap'
    }
  }, suffix) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body-sm)',
      letterSpacing: 'var(--ls-body)',
      color: disabled ? 'var(--text-faint)' : 'var(--text-body)',
      ...style
    }
  }, React.createElement('input', {
    type: 'radio',
    name,
    value,
    checked,
    defaultChecked,
    onChange,
    disabled,
    style: {
      width: 20,
      height: 20,
      accentColor: 'var(--color-primary)',
      cursor: 'inherit'
    },
    ...rest
  }), label ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  invalid = false,
  children,
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, React.createElement('select', {
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: 48,
      padding: '0 40px 0 14px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body-md)',
      letterSpacing: 'var(--ls-body)',
      color: 'var(--text-body)',
      background: 'var(--surface-canvas)',
      appearance: 'none',
      cursor: 'pointer',
      border: '1px solid ' + (invalid ? 'var(--status-alert)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-md)',
      ...style
    },
    ...rest
  }, children), React.createElement('span', {
    'aria-hidden': true,
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      width: 8,
      height: 8,
      marginTop: -6,
      borderRight: '2px solid var(--ink-600)',
      borderBottom: '2px solid var(--ink-600)',
      transform: 'rotate(45deg)',
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  invalid = false,
  rows = 6,
  style,
  ...rest
}) {
  return React.createElement('textarea', {
    rows,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '12px 14px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body-md)',
      lineHeight: 'var(--lh-body)',
      letterSpacing: 'var(--ls-body)',
      color: 'var(--text-body)',
      background: 'var(--surface-canvas)',
      resize: 'vertical',
      border: '1px solid ' + (invalid ? 'var(--status-alert)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-md)',
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return React.createElement('nav', {
    className: 'nk-breadcrumb',
    style: {
      background: 'var(--surface-mist)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    },
    ...rest
  }, React.createElement('ol', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '12px var(--gutter-page)',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 8,
      listStyle: 'none',
      fontSize: 'var(--fs-caption-sm)',
      fontFamily: 'var(--font-text)',
      letterSpacing: 'var(--ls-body)',
      color: 'var(--text-muted)'
    }
  }, items.map((it, i) => React.createElement('li', {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, i > 0 ? React.createElement('span', {
    'aria-hidden': true,
    style: {
      color: 'var(--ink-400)'
    }
  }, '›') : null, (it.href || it.onClick) && i < items.length - 1 ? React.createElement('a', {
    href: it.href || '#',
    onClick: it.onClick ? function (e) {
      e.preventDefault();
      it.onClick();
    } : undefined,
    style: {
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, it.label) : React.createElement('span', {
    style: {
      color: 'var(--text-body)'
    }
  }, it.label)))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CategoryTabs.jsx
try { (() => {
function CategoryTabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return React.createElement('div', {
    className: 'nk-tabs',
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-8)',
      ...style
    },
    ...rest
  }, items.map((it, i) => {
    const key = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    return React.createElement(__ds_scope.Tag, {
      key: i,
      active: value === key,
      onClick: () => onChange && onChange(key)
    }, label);
  }));
}
Object.assign(__ds_scope, { CategoryTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CategoryTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
const COLS = [{
  title: 'レンタル機材',
  links: [{
    label: '汚水・雑排水用ポンプ',
    key: 'products'
  }, {
    label: '残水用ポンプ',
    key: 'products'
  }, {
    label: '大水量ポンプ',
    key: 'products'
  }, {
    label: 'サンド用ポンプ',
    key: 'products'
  }]
}, {
  title: '関連機材',
  links: [{
    label: '発電機',
    key: 'related'
  }, {
    label: 'ホース',
    key: 'related'
  }, {
    label: '送水管',
    key: 'related'
  }, {
    label: 'その他の関連機材',
    key: 'related'
  }]
}, {
  title: 'ご利用案内',
  links: [{
    label: 'サポート内容',
    key: 'support'
  }, {
    label: 'ご相談の流れ',
    key: 'flow'
  }, {
    label: '対応事例',
    key: 'cases'
  }, {
    label: 'よくあるご質問',
    key: 'faq'
  }]
}, {
  title: '会社情報',
  links: [{
    label: '会社案内',
    key: 'company'
  }, {
    label: '対応エリア',
    key: 'company'
  }, {
    label: 'お問い合わせ',
    key: 'contact'
  }, {
    label: '個人情報保護方針'
  }]
}];
function SiteFooter({
  assetBase = 'assets',
  logoSrc,
  tel = '0166-34-2311',
  address = '〒078-8233　北海道旭川市豊岡3条8丁目3番19号',
  columns = COLS,
  onNavigate,
  style,
  ...rest
}) {
  const nav = k => e => {
    if (!k) return;
    e.preventDefault();
    onNavigate && onNavigate(k);
  };
  return React.createElement('footer', {
    className: 'nk-footer',
    style: {
      background: 'var(--surface-slab)',
      color: 'var(--text-on-slab)',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px var(--gutter-page) 32px',
      display: 'grid',
      gridTemplateColumns: 'minmax(240px,1fr) repeat(4,minmax(0,auto))',
      gap: '48px'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement(__ds_scope.Logo, {
    variant: 'lockup',
    onDark: true,
    height: 38,
    assetBase,
    src: logoSrc
  }), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      lineHeight: 1.9,
      color: 'var(--text-on-slab-muted)',
      margin: 0
    }
  }, address), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-data-md)',
      color: 'var(--color-primary-bright)'
    }
  }, 'TEL ' + tel)), columns.map((c, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-caption-md)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-heading)'
    }
  }, c.title), c.links.map((l, j) => {
    const it = typeof l === 'string' ? {
      label: l
    } : l;
    return React.createElement('a', {
      key: j,
      href: it.href || '#',
      onClick: nav(it.key),
      style: {
        fontSize: 'var(--fs-caption-sm)',
        color: 'var(--text-on-slab-muted)',
        textDecoration: 'none',
        lineHeight: 1.9
      }
    }, it.label);
  })))), React.createElement('div', {
    style: {
      borderTop: '1px solid var(--border-on-slab)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px var(--gutter-page)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-on-slab-muted)'
    }
  }, React.createElement('span', null, '© 株式会社水のナカセ'), React.createElement('span', null, 'サイトのご利用について｜個人情報保護方針'))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const DEFAULT_ITEMS = [{
  label: 'レンタル製品'
}, {
  label: '料金・ご利用の流れ'
}, {
  label: '導入事例'
}, {
  label: 'よくあるご質問'
}, {
  label: 'お問い合わせ'
}];
function useNarrow(breakpoint) {
  const [narrow, setNarrow] = React.useState(() => typeof window !== 'undefined' && window.innerWidth < breakpoint);
  React.useEffect(() => {
    const onResize = () => setNarrow(window.innerWidth < breakpoint);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);
  return narrow;
}
function SiteHeader({
  items = DEFAULT_ITEMS,
  active,
  assetBase = 'assets',
  logoSrc,
  tel = '0166-34-2311',
  hours = 'お気軽にご相談ください',
  ctaLabel = '無料見積もり',
  onNavigate,
  style,
  ...rest
}) {
  const narrow = useNarrow(1024);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!narrow) setOpen(false);
  }, [narrow]);
  const nav = key => {
    setOpen(false);
    onNavigate && onNavigate(key);
  };
  const link = (it, i, block) => {
    const on = active === it.label;
    return React.createElement('a', {
      key: i,
      href: it.href || '#',
      onClick: e => {
        e.preventDefault();
        nav(it.key || it.label);
      },
      style: block ? {
        display: 'flex',
        alignItems: 'center',
        minHeight: 56,
        padding: '0 4px',
        borderBottom: '1px solid var(--border-hairline)',
        fontFamily: 'var(--font-text)',
        fontSize: 'var(--fs-body-md)',
        fontWeight: on ? 'var(--fw-bold)' : 'var(--fw-medium)',
        letterSpacing: 'var(--ls-body)',
        color: on ? 'var(--color-primary)' : 'var(--text-body)',
        textDecoration: 'none'
      } : {
        display: 'inline-flex',
        alignItems: 'center',
        height: 48,
        padding: '0 12px',
        whiteSpace: 'nowrap',
        fontFamily: 'var(--font-text)',
        fontSize: 'var(--fs-caption-md)',
        fontWeight: on ? 'var(--fw-bold)' : 'var(--fw-medium)',
        letterSpacing: 'var(--ls-body)',
        color: on ? 'var(--color-primary)' : 'var(--text-body)',
        textDecoration: 'none',
        boxShadow: on ? 'inset 0 -3px 0 var(--color-primary)' : 'none',
        transition: 'var(--transition-base)'
      }
    }, it.label);
  };
  const burger = React.createElement('button', {
    type: 'button',
    'aria-label': 'メニュー',
    onClick: () => setOpen(o => !o),
    style: {
      width: 44,
      height: 44,
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
      background: 'transparent',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      flex: '0 0 auto'
    }
  }, [0, 1, 2].map(i => React.createElement('span', {
    key: i,
    style: {
      width: 18,
      height: 2,
      background: 'var(--ink-900)',
      borderRadius: 1,
      transition: 'var(--transition-base)',
      transform: open ? i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'scaleX(0)' : 'none'
    }
  })));
  return React.createElement('header', {
    className: 'nk-header',
    style: {
      background: 'var(--surface-canvas)',
      borderBottom: '1px solid var(--border-hairline)',
      position: 'relative',
      zIndex: 5,
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-page)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-24)'
    }
  }, React.createElement('a', {
    href: '#',
    onClick: e => {
      e.preventDefault();
      nav('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none',
      flex: '0 1 auto',
      minWidth: 0
    }
  }, React.createElement(__ds_scope.Logo, {
    variant: 'lockup',
    height: 34,
    assetBase,
    src: logoSrc
  }), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-caption-sm)',
      fontWeight: 500,
      color: 'var(--text-muted)',
      letterSpacing: 'var(--ls-caption)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      borderLeft: '1px solid var(--border-hairline)',
      paddingLeft: 12
    }
  }, React.createElement('span', {
    style: {
      display: 'block'
    }
  }, '株式会社水のナカセ'), React.createElement('span', {
    style: {
      display: 'block'
    }
  }, '水中ポンプレンタル'))), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-16)',
      marginLeft: 'auto',
      flex: '0 0 auto'
    }
  }, React.createElement('div', {
    style: {
      textAlign: 'right',
      lineHeight: 1.3,
      display: narrow ? 'none' : 'block'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-data-md)',
      fontWeight: 500,
      color: 'var(--ink-900)'
    }
  }, tel), React.createElement('div', {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-muted)'
    }
  }, hours)), React.createElement(__ds_scope.Button, {
    variant: 'primary',
    size: 'md',
    onClick: () => nav('contact')
  }, ctaLabel), narrow ? burger : null)), narrow ? null : React.createElement('nav', {
    style: {
      borderTop: '1px solid var(--border-hairline)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-page)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, items.map((it, i) => link(it, i, false)))), narrow && open ? React.createElement('nav', {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--surface-canvas)',
      boxShadow: 'var(--shadow-modal)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '8px var(--gutter-page) 20px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map((it, i) => link(it, i, true)), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      padding: '16px 4px 0'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-muted)'
    }
  }, 'お電話でのご相談'), React.createElement('a', {
    href: 'tel:' + tel.replace(/-/g, ''),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-display-md)',
      color: 'var(--color-primary)',
      textDecoration: 'none',
      lineHeight: 1.3
    }
  }, tel), React.createElement('span', {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-muted)'
    }
  }, hours)))) : null);
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/UtilityBar.jsx
try { (() => {
const LINKS = [{
  label: 'よくあるご質問',
  key: 'faq'
}, {
  label: '対応事例',
  key: 'cases'
}, {
  label: '会社案内',
  key: 'company'
}];
function UtilityBar({
  tel = '0166-34-2311',
  tagline = '水中ポンプ・関連機材のレンタル｜計画から設置までご相談いただけます',
  links = LINKS,
  onNavigate,
  style,
  ...rest
}) {
  const nav = k => e => {
    if (!k) return;
    e.preventDefault();
    onNavigate && onNavigate(k);
  };
  return React.createElement('div', {
    className: 'nk-utility',
    style: {
      background: 'var(--surface-slab)',
      color: 'var(--white)',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-caption-sm)',
      letterSpacing: 'var(--ls-body)',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-page)',
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--ink-300)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, tagline), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      flex: '0 0 auto'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      flex: '0 0 auto'
    }
  }, links.map((l, i) => React.createElement('a', {
    key: i,
    href: l.href || '#',
    onClick: nav(l.key),
    style: {
      color: 'var(--white)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, l.label))), React.createElement('span', {
    style: {
      color: 'var(--color-primary-bright)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 500
    }
  }, 'TEL ' + tel))));
}
Object.assign(__ds_scope, { UtilityBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/UtilityBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseDetailScreen.jsx
try { (() => {
const {
  Card,
  MediaPlaceholder,
  Tag,
  Button,
  Icon,
  SpecTable,
  SectionHeading
} = window.DesignSystem_d5d132;
function CaseBlock({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)',
      paddingTop: 'var(--space-24)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, children));
}
function CaseDetailScreen({
  go,
  caseItem
}) {
  const c = caseItem || window.NAKASE_CASES[0];
  const others = window.NAKASE_CASES.filter(x => x.id !== c.id);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.PageHead, {
    go: go,
    crumbs: [{
      label: 'ホーム',
      key: 'home'
    }, {
      label: '対応事例',
      key: 'cases'
    }, {
      label: c.title
    }],
    eyebrow: c.type,
    title: c.title
  }), /*#__PURE__*/React.createElement(window.DraftNotice, null, "\u3053\u306E\u4E8B\u4F8B\u306E\u5185\u5BB9\u306F\u4EEE\u306E\u3082\u306E\u3067\u3059\u3002\u63B2\u8F09\u53EF\u5426\u306E\u78BA\u8A8D\u5F8C\u306B\u5DEE\u3057\u66FF\u3048\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--space-64)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 'var(--space-48)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "4 / 3",
    src: c.photo,
    alt: c.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "4 / 3",
    label: "\u636E\u4ED8\u306E\u69D8\u5B50",
    note: "\u64AE\u5F71\u5F85\u3061",
    radius: "var(--radius-lg)"
  }), /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "4 / 3",
    label: "\u914D\u7BA1\u306E\u53D6\u308A\u56DE\u3057",
    note: "\u64AE\u5F71\u5F85\u3061",
    radius: "var(--radius-lg)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement(SpecTable, {
    rows: [{
      label: '現場種別',
      value: c.type,
      mono: false
    }, {
      label: '地域',
      value: c.area,
      mono: false
    }, {
      label: '対応期間',
      value: c.period,
      mono: false
    }, {
      label: '対応範囲',
      value: c.scope.join('／'),
      mono: false
    }, {
      label: '使用した機材',
      value: c.gear,
      mono: false
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('contact')
  }, "\u4F3C\u305F\u73FE\u5834\u306B\u3064\u3044\u3066\u76F8\u8AC7\u3059\u308B")))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--space-64)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      maxWidth: 840,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement(CaseBlock, {
    title: "\u3054\u76F8\u8AC7\u306E\u5185\u5BB9"
  }, c.ask), /*#__PURE__*/React.createElement(CaseBlock, {
    title: "\u73FE\u5834\u306E\u72B6\u6CC1"
  }, c.site), /*#__PURE__*/React.createElement(CaseBlock, {
    title: "\u5BFE\u5FDC\u306E\u5185\u5BB9"
  }, c.result))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-mist)'
    },
    className: "nk-band-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "OTHER CASES",
    title: "\u307B\u304B\u306E\u4E8B\u4F8B"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--space-gutter)',
      marginTop: 'var(--space-32)'
    }
  }, others.map(o => /*#__PURE__*/React.createElement(Card, {
    key: o.id,
    padding: "var(--space-16)",
    style: {
      display: 'flex',
      gap: 'var(--space-16)',
      alignItems: 'center',
      cursor: 'pointer'
    },
    onClick: () => go('caseDetail', null, o)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 160px'
    }
  }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "4 / 3",
    src: o.photo,
    alt: o.title,
    radius: "var(--radius-lg)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, null, o.type), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-md)',
      fontWeight: 700,
      lineHeight: 1.5,
      color: 'var(--ink-900)'
    }
  }, o.title))))))));
}
Object.assign(window, {
  CaseDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CasesScreen.jsx
try { (() => {
const {
  Card,
  MediaPlaceholder,
  Tag,
  Button,
  Icon,
  Notice
} = window.DesignSystem_d5d132;
function CasesScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.PageHead, {
    go: go,
    crumbs: [{
      label: 'ホーム',
      key: 'home'
    }, {
      label: '対応事例'
    }],
    eyebrow: "CASE",
    title: "\u5BFE\u5FDC\u4E8B\u4F8B",
    lead: "\u6CB3\u5DDD\u30FB\u6C34\u8DEF\u306E\u5DE5\u4E8B\u304B\u3089\u3001\u5730\u4E0B\u8EAF\u4F53\u306E\u6E67\u6C34\u51E6\u7406\u307E\u3067\u3002\u3069\u306E\u3088\u3046\u306A\u3054\u76F8\u8AC7\u3092\u3044\u305F\u3060\u304D\u3001\u4F55\u3092\u304A\u5C4A\u3051\u3057\u305F\u304B\u3092\u307E\u3068\u3081\u3066\u3044\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement(window.DraftNotice, null, "\u63B2\u8F09\u3057\u3066\u3044\u308B\u4E8B\u4F8B\u306E\u5185\u5BB9\u30FB\u5730\u57DF\u30FB\u4F7F\u7528\u6A5F\u6750\u306F\u3001\u63B2\u8F09\u53EF\u5426\u306E\u78BA\u8A8D\u304C\u53D6\u308C\u308B\u307E\u3067\u306E\u4EEE\u306E\u3082\u306E\u3067\u3059\u3002\u516C\u958B\u524D\u306B\u5DEE\u3057\u66FF\u3048\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--space-64)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-24)'
    }
  }, window.NAKASE_CASES.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.id,
    elevated: false,
    bordered: true,
    padding: "var(--space-20)",
    style: {
      display: 'grid',
      gridTemplateColumns: '360px 1fr',
      gap: 'var(--space-32)',
      alignItems: 'center',
      cursor: 'pointer'
    },
    onClick: () => go('caseDetail', null, c)
  }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "4 / 3",
    src: c.photo,
    alt: c.title,
    radius: "var(--radius-lg)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)',
      paddingRight: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Tag, null, c.type), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-muted)'
    }
  }, c.area), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-muted)'
    }
  }, "\uFF0F ", c.period)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 700,
      lineHeight: 1.45,
      color: 'var(--ink-900)'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, c.ask), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, c.scope.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-tint)',
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--color-primary-deep)'
    }
  }, s))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 4,
      fontSize: 'var(--fs-caption-md)',
      fontWeight: 700,
      color: 'var(--color-primary)'
    }
  }, "\u8A73\u3057\u304F\u898B\u308B", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 15
  }))))))), /*#__PURE__*/React.createElement(window.AskBlock, {
    go: go,
    title: "\u4F3C\u305F\u73FE\u5834\u306B\u3064\u3044\u3066\u3001\u3054\u76F8\u8AC7\u3044\u305F\u3060\u3051\u307E\u3059\u3002",
    lead: "\u4E8B\u4F8B\u3068\u6761\u4EF6\u304C\u9055\u3063\u3066\u3082\u69CB\u3044\u307E\u305B\u3093\u3002\u73FE\u5834\u306E\u72B6\u6CC1\u3092\u304A\u805E\u304B\u305B\u3044\u305F\u3060\u3051\u308C\u3070\u3001\u5FC5\u8981\u306A\u6A5F\u6750\u306E\u69CB\u6210\u3092\u3054\u63D0\u6848\u3057\u307E\u3059\u3002",
    label: "\u4F3C\u305F\u73FE\u5834\u306B\u3064\u3044\u3066\u76F8\u8AC7\u3059\u308B"
  }));
}
Object.assign(window, {
  CasesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CasesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CompanyScreen.jsx
try { (() => {
const {
  Card,
  SectionHeading,
  MediaPlaceholder,
  SpecTable,
  Notice,
  Button,
  Icon
} = window.DesignSystem_d5d132;
function CompanyScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.PageHead, {
    go: go,
    crumbs: [{
      label: 'ホーム',
      key: 'home'
    }, {
      label: '会社案内'
    }],
    eyebrow: "ABOUT",
    title: "\u682A\u5F0F\u4F1A\u793E\u6C34\u306E\u30CA\u30AB\u30BB",
    lead: "\u5317\u6D77\u9053\u65ED\u5DDD\u5E02\u3067\u3001\u6C34\u4E2D\u30DD\u30F3\u30D7\u3068\u95A2\u9023\u6A5F\u6750\u306E\u30EC\u30F3\u30BF\u30EB\u3092\u884C\u3063\u3066\u3044\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--space-64)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-48)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)',
      maxWidth: 560
    }
  }, ['河川工事や仮排水の現場では、必要な機材を選ぶこと自体が難しい仕事です。私たちは、現場の水量や排水先の条件を伺うところから始め、必要な機材の構成をご提案します。', 'ポンプ本体に加え、発電機・ホース・送水管まで一式で手配できるため、手配先を分ける必要がありません。搬入・設置についてもご相談いただけます。', '必要な水量が分からない段階からのご相談も承ります。まずは現場の状況をお聞かせください。'].map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, t))), /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "4 / 3",
    label: "\u5009\u5EAB\u30FB\u4FDD\u6709\u6A5F\u6750\u304C\u4E26\u3093\u3060\u5199\u771F",
    note: "\u64AE\u5F71\u5F85\u3061\uFF08\u512A\u5148\u5EA6B\uFF09\uFF0F\u5B9F\u4F53\u306E\u3042\u308B\u4F1A\u793E\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3059\u4E00\u679A"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-mist)'
    },
    className: "nk-band-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "COMPANY",
    title: "\u4F1A\u793E\u6982\u8981"
  }), /*#__PURE__*/React.createElement(SpecTable, {
    style: {
      marginTop: 'var(--space-24)'
    },
    rows: window.NAKASE_COMPANY
  }), /*#__PURE__*/React.createElement(Notice, {
    tone: "warn",
    title: "\u516C\u958B\u524D\u306B\u78BA\u8A8D\u304C\u5FC5\u8981\u3067\u3059",
    style: {
      marginTop: 'var(--space-24)'
    }
  }, "\u300C\u8981\u78BA\u8A8D\u300D\u3068\u8868\u793A\u3057\u3066\u3044\u308B\u9805\u76EE\uFF08\u8A2D\u7ACB\u30FB\u4EE3\u8868\u8005\u30FB\u8CC7\u672C\u91D1\u30FB\u55B6\u696D\u6642\u9593\uFF09\u306F\u3001\u30CA\u30AB\u30BB\u69D8\u3088\u308A\u3054\u63D0\u4F9B\u3044\u305F\u3060\u304D\u6B21\u7B2C\u3001\u5DEE\u3057\u66FF\u3048\u307E\u3059\u3002\u5EFA\u8A2D\u696D\u8A31\u53EF\u30FB\u4FDD\u6709\u8CC7\u683C\u30FB\u52A0\u76DF\u56E3\u4F53\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u3053\u306E\u8868\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002"))), /*#__PURE__*/React.createElement("section", {
    className: "nk-band-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-48)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "AREA",
    title: "\u5BFE\u5FDC\u30A8\u30EA\u30A2",
    lead: "\u5317\u6D77\u9053\u5168\u57DF\u306B\u3054\u5BFE\u5FDC\u3057\u307E\u3059\u3002\u65ED\u5DDD\u5E02\u306E\u62E0\u70B9\u3092\u8D77\u70B9\u306B\u3001\u9053\u5185\u306E\u73FE\u5834\u3078\u6A5F\u6750\u3092\u304A\u5C4A\u3051\u3057\u3066\u3044\u307E\u3059\u3002\u73FE\u5834\u306E\u5834\u6240\u3092\u304A\u77E5\u3089\u305B\u3044\u305F\u3060\u3051\u308C\u3070\u3001\u642C\u5165\u306E\u65B9\u6CD5\u3068\u3042\u308F\u305B\u3066\u3054\u6848\u5185\u3057\u307E\u3059\u3002"
  })), /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "4 / 3",
    label: "\u5317\u6D77\u9053\u306E\u5BFE\u5FDC\u30A8\u30EA\u30A2\u56F3",
    note: "\u5236\u4F5C\u5074\u3067\u4F5C\u6210"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "nk-band-sm",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-48)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "16 / 9",
    label: "\u30A2\u30AF\u30BB\u30B9\u30DE\u30C3\u30D7",
    note: "\u5236\u4F5C\u5074\u3067\u4F5C\u6210"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "ACCESS",
    title: "\u30A2\u30AF\u30BB\u30B9"
  }), /*#__PURE__*/React.createElement(SpecTable, {
    dense: true,
    rows: [{
      label: '所在地',
      value: '〒078-8233　北海道旭川市豊岡3条8丁目3番19号',
      mono: false
    }, {
      label: '電話番号',
      value: '0166-34-2311'
    }, {
      label: '駐車場',
      value: '要確認',
      mono: false
    }]
  })))), /*#__PURE__*/React.createElement(window.AskBlock, {
    go: go,
    title: "\u73FE\u5834\u306E\u72B6\u6CC1\u3092\u304A\u805E\u304B\u305B\u304F\u3060\u3055\u3044\u3002",
    lead: "\u6A5F\u6750\u304C\u6C7A\u307E\u3063\u3066\u3044\u306A\u304F\u3066\u3082\u3001\u5FC5\u8981\u306A\u6C34\u91CF\u304C\u5206\u304B\u3089\u306A\u304F\u3066\u3082\u69CB\u3044\u307E\u305B\u3093\u3002",
    label: "\u73FE\u5834\u6761\u4EF6\u3092\u4F1D\u3048\u3066\u76F8\u8AC7\u3059\u308B"
  }));
}
Object.assign(window, {
  CompanyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CompanyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  SectionHeading,
  FormField,
  Input,
  Textarea,
  Select,
  Radio,
  Checkbox,
  Button,
  Card,
  Notice,
  SpecTable,
  Icon,
  MediaPlaceholder
} = window.DesignSystem_d5d132;
function Fieldset({
  title,
  note,
  children,
  cols = 2
}) {
  return /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: 0,
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("legend", {
    style: {
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, title), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption-md)',
      color: 'var(--text-muted)'
    }
  }, note) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + cols + ',1fr)',
      gap: 'var(--space-16)'
    }
  }, children));
}
function ContactScreen({
  go
}) {
  const [kind, setKind] = React.useState('機材選定から相談');
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.PageHead, {
    go: go,
    crumbs: [{
      label: 'ホーム',
      key: 'home'
    }, {
      label: 'お問い合わせ'
    }],
    eyebrow: "CONTACT",
    title: "\u73FE\u5834\u306E\u72B6\u6CC1\u3092\u304A\u805E\u304B\u305B\u304F\u3060\u3055\u3044\u3002",
    lead: "\u6A5F\u6750\u304C\u6C7A\u307E\u3063\u3066\u3044\u306A\u3044\u6BB5\u968E\u304B\u3089\u3054\u76F8\u8AC7\u3044\u305F\u3060\u3051\u307E\u3059\u3002\u5206\u304B\u308B\u7BC4\u56F2\u3067\u3054\u8A18\u5165\u304F\u3060\u3055\u3044\u3002\u4E0D\u660E\u306A\u9805\u76EE\u306F\u7A7A\u6B04\u3067\u69CB\u3044\u307E\u305B\u3093\u3002"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--space-64)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr .6fr',
      gap: 'var(--space-48)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("form", {
    className: "nk-field",
    onSubmit: e => {
      e.preventDefault();
      go('thanks');
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-40)'
    }
  }, /*#__PURE__*/React.createElement(Fieldset, {
    title: "\u304A\u5BA2\u69D8\u306B\u3064\u3044\u3066"
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "\u4F1A\u793E\u540D\u30FB\u56E3\u4F53\u540D",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u682A\u5F0F\u4F1A\u793E\u25CB\u25CB\u5EFA\u8A2D"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "\u3054\u62C5\u5F53\u8005\u540D",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u5C71\u7530 \u592A\u90CE"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "\u96FB\u8A71\u756A\u53F7",
    required: true,
    help: "\u65E5\u4E2D\u3064\u306A\u304C\u308B\u756A\u53F7\u3092\u3054\u8A18\u5165\u304F\u3060\u3055\u3044"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "tel",
    placeholder: "0166-00-0000"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "you@example.co.jp"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "\u3054\u8FD4\u4FE1\u306E\u3054\u5E0C\u671B",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-24)',
      flexWrap: 'wrap'
    }
  }, ['電話', 'メール', 'どちらでも'].map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o,
    name: "reply",
    label: o,
    defaultChecked: o === 'どちらでも'
  }))))), /*#__PURE__*/React.createElement(Fieldset, {
    title: "\u3054\u76F8\u8AC7\u5185\u5BB9",
    cols: 1
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "\u3054\u76F8\u8AC7\u306E\u7A2E\u985E",
    required: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, ['機材のレンタル（機種が決まっている）', '機材選定から相談', '搬入・設置も含めて相談', '水理計算・流量測定の相談', 'その他'].map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o,
    name: "kind",
    label: o,
    checked: kind === o.slice(0, 7) || kind === o,
    onChange: () => setKind(o)
  })))), /*#__PURE__*/React.createElement(FormField, {
    label: "\u73FE\u5834\u306E\u5834\u6240",
    required: true,
    help: "\u5E02\u753A\u6751\u307E\u3067\u3067\u69CB\u3044\u307E\u305B\u3093"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u5317\u6D77\u9053\u65ED\u5DDD\u5E02"
  }))), /*#__PURE__*/React.createElement(Fieldset, {
    title: "\u73FE\u5834\u306E\u72B6\u6CC1",
    note: "\u5206\u304B\u308B\u7BC4\u56F2\u3067\u69CB\u3044\u307E\u305B\u3093\u3002\u3059\u3079\u3066\u4EFB\u610F\u3067\u3059\u3002"
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "\u4F7F\u7528\u958B\u59CB\u306E\u3054\u5E0C\u671B\u6642\u671F"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "2026\u5E749\u6708\u4E0A\u65EC"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "\u4F7F\u7528\u671F\u9593\u306E\u76EE\u5B89"
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"), ['1週間以内', '1か月以内', '1〜3か月', '3か月以上', '未定'].map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o)))), /*#__PURE__*/React.createElement(FormField, {
    label: "\u73FE\u5834\u306E\u7A2E\u985E"
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"), ['河川・水路', '土木工事', '建築・地下工事', '設備工事', '農業・用水', 'その他'].map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o)))), /*#__PURE__*/React.createElement(FormField, {
    label: "\u6C34\u8CEA"
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"), ['清水', '泥水', '土砂混じり', '汚水', '不明'].map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o)))), /*#__PURE__*/React.createElement(FormField, {
    label: "\u73FE\u5834\u306E\u96FB\u6E90",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-20)',
      flexWrap: 'wrap'
    }
  }, ['三相200V あり', '単相100V のみ', '電源なし', '不明'].map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o,
    name: "power",
    label: o
  })))), /*#__PURE__*/React.createElement(FormField, {
    label: "\u3054\u5E0C\u671B\u306E\u6A5F\u6750\u304C\u6C7A\u307E\u3063\u3066\u3044\u308B\u5834\u5408",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u6A5F\u7A2E\u540D\u30FB\u578B\u756A\u30FB\u53F0\u6570\u306A\u3069"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "\u3054\u76F8\u8AC7\u5185\u5BB9\u306E\u8A73\u7D30",
    style: {
      gridColumn: '1 / -1'
    },
    help: "\u6392\u6C34\u3057\u305F\u3044\u6C34\u91CF\u3001\u6392\u6C34\u5148\u307E\u3067\u306E\u8DDD\u96E2\u3068\u9AD8\u4F4E\u5DEE\u306A\u3069\u3092\u3054\u8A18\u5165\u3044\u305F\u3060\u3051\u308B\u3068\u3001\u3054\u63D0\u6848\u304C\u5177\u4F53\u7684\u306B\u306A\u308A\u307E\u3059\u3002"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 5,
    placeholder: "\u4F8B\uFF1A\u6398\u524A\u5E95\u306B\u6E67\u6C34\u304C\u51FA\u3066\u304A\u308A\u3001150m \u5148\u306E\u6C34\u8DEF\u307E\u3067\u6392\u6C34\u3057\u305F\u3044\u3002\u9AD8\u4F4E\u5DEE\u306F 3m \u307B\u3069\u3002"
  }))), /*#__PURE__*/React.createElement(Fieldset, {
    title: "\u56F3\u9762\u30FB\u5199\u771F\u306E\u6DFB\u4ED8",
    note: "\u4EFB\u610F\u3002\u73FE\u5834\u306E\u5E73\u9762\u56F3\u3084\u5199\u771F\u304C\u3042\u308B\u3068\u3001\u3054\u63D0\u6848\u304C\u65E9\u304F\u306A\u308A\u307E\u3059\u3002",
    cols: 1
  }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "6 / 1",
    label: "\u30D5\u30A1\u30A4\u30EB\u6DFB\u4ED8\u6B04",
    note: "\u8981\u78BA\u8A8D\uFF1A\u6DFB\u4ED8\u6A5F\u80FD\u306E\u8981\u5426"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)',
      paddingTop: 'var(--space-8)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: /*#__PURE__*/React.createElement("span", null, "\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u308A\u6271\u3044\u306B\u540C\u610F\u3057\u307E\u3059\uFF08", /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"), "\uFF09")
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    style: {
      alignSelf: 'flex-start'
    }
  }, "\u3053\u306E\u5185\u5BB9\u3067\u76F8\u8AC7\u3059\u308B"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)',
      position: 'sticky',
      top: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "slab",
    padding: "var(--space-24)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-on-slab-muted)'
    }
  }, "\u304A\u96FB\u8A71\u3067\u306E\u3054\u76F8\u8AC7"), /*#__PURE__*/React.createElement("a", {
    href: "tel:0166342311",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-display-sm)',
      color: 'var(--color-primary-bright)',
      textDecoration: 'none'
    }
  }, "0166-34-2311"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-on-slab-muted)'
    }
  }, "\u53D7\u4ED8\u6642\u9593\uFF1A\u8981\u78BA\u8A8D")), /*#__PURE__*/React.createElement(Notice, {
    tone: "info",
    title: "\u304A\u805E\u304B\u305B\u3044\u305F\u3060\u304D\u305F\u3044 3 \u70B9"
  }, "\u73FE\u5834\u306E\u5834\u6240\uFF0F\u4F7F\u7528\u3057\u305F\u3044\u6642\u671F\uFF0F\u6392\u6C34\u3057\u305F\u3044\u6C34\u91CF\uFF08\u307E\u305F\u306F\u73FE\u5834\u306E\u5E83\u3055\u3068\u6C34\u6DF1\uFF09\u3002\u3053\u306E 3 \u70B9\u304C\u5206\u304B\u308C\u3070\u3001\u3054\u63D0\u6848\u3092\u59CB\u3081\u3089\u308C\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "4 / 3",
    src: window.NAKASE_PHOTOS.urbanCanal,
    alt: "\u6C34\u8DEF\u3067\u306E\u636E\u4ED8\u4F5C\u696D"
  })))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FaqScreen.jsx
try { (() => {
const {
  FaqAccordion,
  SectionHeading,
  Card,
  Button,
  Icon
} = window.DesignSystem_d5d132;
function FaqScreen({
  go
}) {
  const groups = window.NAKASE_FAQ_GROUPS;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.PageHead, {
    go: go,
    crumbs: [{
      label: 'ホーム',
      key: 'home'
    }, {
      label: 'よくあるご質問'
    }],
    eyebrow: "FAQ",
    title: "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F",
    lead: "\u304A\u554F\u3044\u5408\u308F\u305B\u306E\u524D\u306B\u591A\u304F\u3044\u305F\u3060\u304F\u8CEA\u554F\u3092\u307E\u3068\u3081\u3066\u3044\u307E\u3059\u3002\u3053\u3053\u306B\u306A\u3044\u5185\u5BB9\u3082\u3001\u304A\u6C17\u8EFD\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--space-64)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      gap: 'var(--space-48)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, groups.map(g => /*#__PURE__*/React.createElement("a", {
    key: g.cat,
    href: '#faq-' + encodeURIComponent(g.cat),
    style: {
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      textDecoration: 'none',
      borderLeft: '2px solid var(--border-hairline)'
    }
  }, g.cat))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-48)'
    }
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.cat,
    id: 'faq-' + encodeURIComponent(g.cat),
    className: "nk-reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-16)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, g.cat), /*#__PURE__*/React.createElement(FaqAccordion, {
    items: g.items,
    defaultOpen: -1
  })))))), /*#__PURE__*/React.createElement(window.AskBlock, {
    go: go,
    title: "\u89E3\u6C7A\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u76F4\u63A5\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002",
    lead: "\u73FE\u5834\u306E\u72B6\u6CC1\u3092\u304A\u805E\u304B\u305B\u3044\u305F\u3060\u3051\u308C\u3070\u3001\u5FC5\u8981\u306A\u6A5F\u6750\u3068\u5BFE\u5FDC\u7BC4\u56F2\u3092\u3054\u6848\u5185\u3057\u307E\u3059\u3002",
    label: "\u76F8\u8AC7\u3092\u59CB\u3081\u308B"
  }));
}
Object.assign(window, {
  FaqScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FaqScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FlowScreen.jsx
try { (() => {
const {
  Card,
  SectionHeading,
  SpecTable,
  Notice,
  Button,
  Icon,
  FaqAccordion
} = window.DesignSystem_d5d132;
function FlowScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.PageHead, {
    go: go,
    crumbs: [{
      label: 'ホーム',
      key: 'home'
    }, {
      label: 'ご相談の流れ'
    }],
    eyebrow: "HOW IT WORKS",
    title: "\u3054\u76F8\u8AC7\u304B\u3089\u8A2D\u7F6E\u307E\u3067\u306E\u6D41\u308C",
    lead: "\u304A\u554F\u3044\u5408\u308F\u305B\u304B\u3089\u8FD4\u5374\u307E\u3067\u3001\u540C\u3058\u62C5\u5F53\u8005\u304C\u5BFE\u5FDC\u3057\u307E\u3059\u3002\u5404\u6BB5\u968E\u3067\u300C\u304A\u805E\u304B\u305B\u3044\u305F\u3060\u304D\u305F\u3044\u3053\u3068\u300D\u3082\u3042\u308F\u305B\u3066\u8A18\u8F09\u3057\u3066\u3044\u307E\u3059\u3002\u5206\u304B\u308B\u7BC4\u56F2\u3067\u69CB\u3044\u307E\u305B\u3093\u3002"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--space-64)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)'
    }
  }, window.NAKASE_STEPS.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    elevated: false,
    bordered: true,
    padding: "var(--space-28)",
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 1fr 340px',
      gap: 'var(--space-24)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-display-md)',
      fontWeight: 500,
      color: 'var(--color-primary)',
      lineHeight: 1
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, s.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-16)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-mist)',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-caption)',
      color: 'var(--text-muted)'
    }
  }, "\u304A\u805E\u304B\u305B\u3044\u305F\u3060\u304D\u305F\u3044\u3053\u3068"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, s.tell)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-mist)'
    },
    className: "nk-band-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-48)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "PRICE",
    title: "\u6599\u91D1\u306E\u8003\u3048\u65B9",
    lead: "\u30EC\u30F3\u30BF\u30EB\u6599\u91D1\u306F\u30B5\u30A4\u30C8\u306B\u63B2\u8F09\u3057\u3066\u3044\u307E\u305B\u3093\u3002\u6A5F\u6750\u306E\u7A2E\u985E\u30FB\u53F0\u6570\u30FB\u4F7F\u7528\u671F\u9593\u30FB\u914D\u7BA1\u306E\u9577\u3055\u30FB\u73FE\u5834\u307E\u3067\u306E\u8DDD\u96E2\u306B\u3088\u3063\u3066\u5909\u308F\u308B\u305F\u3081\u3001\u73FE\u5834\u6761\u4EF6\u3092\u4F3A\u3063\u305F\u3046\u3048\u3067\u4E00\u5F0F\u3067\u3054\u63D0\u793A\u3057\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement(SpecTable, {
    style: {
      marginTop: 'var(--space-24)'
    },
    dense: true,
    rows: [{
      label: '排水計画のご相談',
      value: 'お見積もりに含みます',
      mono: false
    }, {
      label: '機材選定・台数の算出',
      value: 'お見積もりに含みます',
      mono: false
    }, {
      label: '配管・付帯機材の手配',
      value: '内容に応じて',
      mono: false
    }, {
      label: '搬入',
      value: '要確認',
      mono: false
    }, {
      label: '設置',
      value: 'ご要望に応じて',
      mono: false
    }, {
      label: '点検・整備',
      value: '要確認',
      mono: false
    }]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "PERIOD",
    title: "\u3054\u5229\u7528\u671F\u9593\u306E\u8003\u3048\u65B9",
    lead: "\u5DE5\u671F\u306B\u5408\u308F\u305B\u3066\u671F\u9593\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u9014\u4E2D\u3067\u5DE5\u671F\u304C\u5EF6\u3073\u305F\u5834\u5408\u3084\u3001\u6A5F\u6750\u3092\u8FFD\u52A0\u3057\u305F\u3044\u5834\u5408\u3082\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002"
  }), /*#__PURE__*/React.createElement(Notice, {
    tone: "info",
    title: "\u5DE5\u671F\u304C\u8AAD\u3081\u306A\u3044\u5834\u5408",
    style: {
      marginTop: 'var(--space-24)'
    }
  }, "\u300C\u3044\u3064\u307E\u3067\u4F7F\u3046\u304B\u5206\u304B\u3089\u306A\u3044\u300D\u3068\u3044\u3046\u3054\u76F8\u8AC7\u3082\u591A\u304F\u3044\u305F\u3060\u304D\u307E\u3059\u3002\u304A\u304A\u3088\u305D\u306E\u898B\u8FBC\u307F\u3060\u3051\u3067\u3082\u304A\u4F1D\u3048\u3044\u305F\u3060\u3051\u308C\u3070\u3001\u671F\u9593\u306E\u8A2D\u5B9A\u3092\u3054\u63D0\u6848\u3057\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(Notice, {
    tone: "warn",
    title: "\u3054\u5229\u7528\u671F\u9593\u306B\u3064\u3044\u3066",
    style: {
      marginTop: 'var(--space-16)'
    }
  }, "\u6700\u77ED\u30FB\u6700\u9577\u306E\u3054\u5229\u7528\u671F\u9593\u3001\u671F\u9593\u306E\u533A\u5207\u308A\u65B9\uFF08\u65E5\uFF0F\u9031\uFF0F\u6708\uFF09\u306F\u78BA\u8A8D\u4E2D\u3067\u3059\u3002\u6C7A\u307E\u308A\u6B21\u7B2C\u3001\u3053\u3053\u306B\u8A18\u8F09\u3057\u307E\u3059\u3002")))), /*#__PURE__*/React.createElement("section", {
    className: "nk-band-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "FAQ",
    title: "\u6D41\u308C\u306B\u3064\u3044\u3066\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F"
  }), /*#__PURE__*/React.createElement(FaqAccordion, {
    style: {
      marginTop: 'var(--space-24)'
    },
    items: window.NAKASE_FAQ_GROUPS[0].items
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-ink",
    style: {
      marginTop: 'var(--space-24)'
    },
    onClick: () => go('faq')
  }, "\u3059\u3079\u3066\u306E\u8CEA\u554F\u3092\u898B\u308B"))), /*#__PURE__*/React.createElement(window.AskBlock, {
    go: go,
    title: "\u307E\u305A\u306F\u3001\u73FE\u5834\u306E\u3053\u3068\u3092\u6559\u3048\u3066\u304F\u3060\u3055\u3044\u3002",
    lead: "\u73FE\u5834\u306E\u5834\u6240\u30FB\u4F7F\u7528\u6642\u671F\u30FB\u6392\u6C34\u3057\u305F\u3044\u6C34\u91CF\u306E 3 \u70B9\u304C\u5206\u304B\u308C\u3070\u3001\u3054\u63D0\u6848\u3092\u59CB\u3081\u3089\u308C\u307E\u3059\u3002",
    label: "\u76F8\u8AC7\u3092\u59CB\u3081\u308B"
  }));
}
Object.assign(window, {
  FlowScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FlowScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  SectionHeading,
  MediaPlaceholder,
  Icon,
  FeatureCard,
  ProductCard,
  StepFlow,
  FaqAccordion,
  Notice,
  SpecTable,
  Tag
} = window.DesignSystem_d5d132;

/* S1 ─ ファーストビュー */
function HomeHero({
  go
}) {
  const PH = window.NAKASE_PHOTOS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--surface-slab)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "nk-hero-photo",
    src: PH.channelSunset,
    alt: "\u6CB3\u5DDD\u6539\u4FEE\u73FE\u5834\u3067\u306E\u6C34\u66FF\u3048\u4F5C\u696D",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 60%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(20,33,44,.92) 0%,rgba(20,33,44,.80) 42%,rgba(20,33,44,.28) 72%,rgba(20,33,44,.15) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap",
    style: {
      position: 'relative',
      padding: '104px var(--gutter-page)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nk-enter nk-enter-1",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 'var(--fs-caption-md)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-caption)',
      color: 'var(--color-primary-bright)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 4,
      borderRadius: 2,
      background: 'var(--color-primary-bright)'
    }
  }), "\u6C34\u4E2D\u30DD\u30F3\u30D7\u30FB\u95A2\u9023\u6A5F\u6750\u30EC\u30F3\u30BF\u30EB"), /*#__PURE__*/React.createElement("h1", {
    className: "nk-enter nk-enter-2",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-xxl)',
      fontWeight: 700,
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-heading)',
      margin: 0,
      color: 'var(--white)',
      maxWidth: 760
    }
  }, "\u6C34\u4E2D\u30DD\u30F3\u30D7\u306F\u3001", /*#__PURE__*/React.createElement("br", null), "\u6C34\u306E\u30CA\u30AB\u30BB\u3002"), /*#__PURE__*/React.createElement("p", {
    className: "nk-enter nk-enter-3",
    style: {
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      letterSpacing: 'var(--ls-body)',
      color: 'var(--ink-200)',
      margin: 0,
      maxWidth: 560
    }
  }, "\u30DD\u30F3\u30D7\u3082\u3001\u767A\u96FB\u6A5F\u3082\u3001\u914D\u7BA1\u3082\u3002\u73FE\u5834\u306B\u5FC5\u8981\u306A\u6A5F\u6750\u3092\u3001\u8A08\u753B\u304B\u3089\u8A2D\u7F6E\u307E\u3067\u307E\u3068\u3081\u3066\u3054\u76F8\u8AC7\u3044\u305F\u3060\u3051\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "nk-enter nk-enter-4",
    style: {
      display: 'flex',
      gap: 'var(--space-12)',
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "on-slab",
    size: "lg",
    onClick: () => go('contact')
  }, "\u73FE\u5834\u6761\u4EF6\u3092\u4F1D\u3048\u3066\u76F8\u8AC7\u3059\u308B"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-slab",
    size: "lg",
    onClick: () => go('products')
  }, "\u30EC\u30F3\u30BF\u30EB\u3067\u304D\u308B\u6A5F\u6750\u3092\u898B\u308B")), /*#__PURE__*/React.createElement("span", {
    className: "nk-enter nk-enter-4",
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--ink-300)'
    }
  }, "\u6A5F\u6750\u304C\u6C7A\u307E\u3063\u3066\u3044\u306A\u304F\u3066\u3082\u3001\u3054\u76F8\u8AC7\u3044\u305F\u3060\u3051\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "nk-enter nk-enter-5",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-12)',
      marginTop: 'var(--space-8)'
    }
  }, ['計画のご相談', '機材選定', '搬入', '設置'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-on-slab)',
      background: 'rgba(255,255,255,.06)',
      color: 'var(--white)',
      fontSize: 'var(--fs-caption-md)',
      letterSpacing: 'var(--ls-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 3,
      background: 'var(--color-primary-bright)'
    }
  }), t)))));
}

/* S4 ─ 関連機材まで一式（最重要） */
function OneStopItem({
  title,
  src,
  label,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "1 / 1",
    src: src,
    fit: "contain",
    alt: title,
    label: label,
    note: note,
    radius: "var(--radius-lg)",
    style: src ? {
      border: '1px solid var(--border-hairline)',
      background: 'var(--white)'
    } : null
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, title));
}
function HomeScreen({
  go
}) {
  const PH = window.NAKASE_PHOTOS;
  const items = window.NAKASE_PRODUCTS.slice(0, 3);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(HomeHero, {
    go: go
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-mist)'
    },
    className: "nk-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "\u3053\u3093\u306A\u73FE\u5834\u3067",
    title: "\u73FE\u5834\u306E\u6C34\u307E\u308F\u308A\u3067\u3001\u3053\u3093\u306A\u304A\u56F0\u308A\u3054\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u304B\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-16)',
      marginTop: 'var(--space-40)'
    }
  }, window.NAKASE_PAINS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    elevated: false,
    bordered: true,
    padding: "var(--space-24)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 26,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 700,
      lineHeight: 1.5,
      color: 'var(--ink-900)'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, p.body)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-32) 0 0',
      fontSize: 'var(--fs-body-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, "\u6C34\u306E\u30CA\u30AB\u30BB\u306F\u3001\u6C34\u4E2D\u30DD\u30F3\u30D7\u3068\u95A2\u9023\u6A5F\u6750\u306E\u30EC\u30F3\u30BF\u30EB\u3092\u884C\u3063\u3066\u3044\u307E\u3059\u3002\u6A5F\u6750\u3092\u304A\u8CB8\u3057\u3059\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u73FE\u5834\u306B\u5408\u3046\u69CB\u6210\u3092\u4E00\u7DD2\u306B\u6C7A\u3081\u308B\u3068\u3053\u308D\u304B\u3089\u304A\u5F15\u304D\u53D7\u3051\u3057\u307E\u3059\u3002"))), /*#__PURE__*/React.createElement("section", {
    className: "nk-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "RENTAL LINEUP",
    title: "\u30EC\u30F3\u30BF\u30EB\u3067\u304D\u308B\u6C34\u4E2D\u30DD\u30F3\u30D7",
    lead: "\u53E3\u5F84 50mm \u304B\u3089 150mm \u307E\u3067\u3001\u7528\u9014\u5225\u306B\u3054\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u3002\u73FE\u5834\u6761\u4EF6\u3092\u4F3A\u3063\u305F\u3046\u3048\u3067\u3054\u63D0\u6848\u3057\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('products'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 16
    })
  }, "\u3059\u3079\u3066\u306E\u6A5F\u6750\u3092\u898B\u308B")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-gutter)',
      marginTop: 'var(--space-40)'
    }
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.model,
    name: p.name,
    model: p.model,
    image: p.image,
    specs: p.specs.slice(0, 3),
    ctaLabel: "\u3053\u306E\u6A5F\u6750\u306B\u3064\u3044\u3066\u76F8\u8AC7\u3059\u308B",
    onSelect: () => go('detail', p)
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-mist)'
    },
    className: "nk-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "ONE STOP",
    title: "\u30DD\u30F3\u30D7\u3060\u3051\u3067\u306F\u3001\u73FE\u5834\u306F\u52D5\u304D\u307E\u305B\u3093\u3002",
    lead: "\u767A\u96FB\u6A5F\u30FB\u30DB\u30FC\u30B9\u30FB\u9001\u6C34\u7BA1\u307E\u3067\u3001\u73FE\u5834\u306B\u5FC5\u8981\u306A\u6A5F\u6750\u3092\u4E00\u5F0F\u3067\u3054\u76F8\u8AC7\u3044\u305F\u3060\u3051\u307E\u3059\u3002\u624B\u914D\u5148\u3092\u5206\u3051\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-gutter)',
      marginTop: 'var(--space-40)'
    }
  }, /*#__PURE__*/React.createElement(OneStopItem, {
    title: "\u6C34\u4E2D\u30DD\u30F3\u30D7",
    src: window.NAKASE_PRODUCTS[0].image
  }), /*#__PURE__*/React.createElement(OneStopItem, {
    title: "\u767A\u96FB\u6A5F",
    label: "\u767A\u96FB\u6A5F\u306E\u5199\u771F",
    note: "\u64AE\u5F71\u5F85\u3061\uFF08\u512A\u5148\u5EA6A\uFF09"
  }), /*#__PURE__*/React.createElement(OneStopItem, {
    title: "\u30DB\u30FC\u30B9",
    label: "\u30DB\u30FC\u30B9\u306E\u5199\u771F",
    note: "\u64AE\u5F71\u5F85\u3061\uFF08\u512A\u5148\u5EA6A\uFF09"
  }), /*#__PURE__*/React.createElement(OneStopItem, {
    title: "\u9001\u6C34\u7BA1",
    label: "\u9001\u6C34\u7BA1\u306E\u5199\u771F",
    note: "\u64AE\u5F71\u5F85\u3061\uFF08\u512A\u5148\u5EA6A\uFF09"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-12)',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: 'var(--space-32)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('related')
  }, "\u95A2\u9023\u6A5F\u6750\u3092\u898B\u308B"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption-md)',
      color: 'var(--text-muted)'
    }
  }, "\u95A2\u9023\u6A5F\u6750\u306F\u6848\u4EF6\u306B\u5FDC\u3058\u3066\u624B\u914D\u3044\u305F\u3057\u307E\u3059\u3002\u3054\u5E0C\u671B\u306E\u4ED5\u69D8\u30FB\u6570\u91CF\u306F\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002")))), /*#__PURE__*/React.createElement("section", {
    className: "nk-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "SUPPORT",
    title: "\u8A08\u753B\u304B\u3089\u8A2D\u7F6E\u307E\u3067\u3001\u7A93\u53E3\u306F\u3072\u3068\u3064\u3002",
    lead: "\u6A5F\u6750\u3092\u5C4A\u3051\u3066\u7D42\u308F\u308A\u306B\u306F\u3057\u307E\u305B\u3093\u3002\u6392\u6C34\u306E\u8A08\u753B\u304B\u3089\u73FE\u5834\u3067\u306E\u636E\u4ED8\u307E\u3067\u3001\u540C\u3058\u62C5\u5F53\u8005\u304C\u901A\u3057\u3067\u5BFE\u5FDC\u3057\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-48)',
      alignItems: 'center',
      marginTop: 'var(--space-40)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--space-16)'
    }
  }, window.NAKASE_SUPPORT.slice(0, 4).map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.key,
    elevated: false,
    bordered: true,
    padding: "var(--space-20)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--color-primary)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, s.lead)))), /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "4 / 3",
    label: "\u642C\u5165\u30FB\u8A2D\u7F6E\u4F5C\u696D\u4E2D\u306E\u5199\u771F",
    note: "\u64AE\u5F71\u5F85\u3061\uFF08\u512A\u5148\u5EA6A\uFF09\uFF0F\u6A2A\u4F4D\u7F6E\u30FB\u4F5C\u696D\u306E\u69D8\u5B50\u304C\u5206\u304B\u308B\u3082\u306E"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-12)',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: 'var(--space-32)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline-ink",
    onClick: () => go('support')
  }, "\u30B5\u30DD\u30FC\u30C8\u5185\u5BB9\u3092\u8A73\u3057\u304F\u898B\u308B"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption-md)',
      color: 'var(--text-muted)'
    }
  }, "\u642C\u5165\u30FB\u8A2D\u7F6E\u306F\u6848\u4EF6\u306B\u3088\u308A\u5BFE\u5FDC\u3067\u304D\u308B\u7BC4\u56F2\u304C\u7570\u306A\u308A\u307E\u3059\u3002")))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--surface-slab)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "nk-hero-photo",
    src: PH.canalCrew,
    alt: "\u6C34\u8DEF\u3067\u306E\u636E\u4ED8\u4F5C\u696D",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 55%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(20,33,44,.92) 0%,rgba(20,33,44,.60) 55%,rgba(20,33,44,.15) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap",
    style: {
      position: 'relative',
      padding: '88px var(--gutter-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onSlab: true,
    eyebrow: "\u6C34\u7406\u8A08\u7B97\u30FB\u6D41\u91CF\u6E2C\u5B9A",
    title: "\u5FC5\u8981\u306A\u6C34\u91CF\u304C\u5206\u304B\u3089\u306A\u3044\u6BB5\u968E\u304B\u3089\u3001\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002",
    lead: "\u300C\u6392\u6C34\u3057\u305F\u3044\u6C34\u91CF \xF7 \u6642\u9593\u300D\u3067\u5FC5\u8981\u306A\u5410\u51FA\u91CF\u3092\u3001\u300C\u5782\u76F4\u8DDD\u96E2\uFF0B\u914D\u7BA1\u62B5\u6297\u300D\u3067\u5168\u63DA\u7A0B\u3092\u6982\u7B97\u3057\u307E\u3059\u3002\u3053\u306E\u8A08\u7B97\u305D\u306E\u3082\u306E\u304B\u3089\u3054\u76F8\u8AC7\u3044\u305F\u3060\u3051\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "on-slab",
    onClick: () => go('support'),
    style: {
      alignSelf: 'flex-start'
    }
  }, "\u8A08\u7B97\u304B\u3089\u76F8\u8AC7\u3059\u308B")))), /*#__PURE__*/React.createElement("section", {
    className: "nk-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "HOW IT WORKS",
    title: "\u3054\u76F8\u8AC7\u304B\u3089\u8A2D\u7F6E\u307E\u3067\u306E\u6D41\u308C",
    lead: "\u304A\u554F\u3044\u5408\u308F\u305B\u304B\u3089\u8FD4\u5374\u307E\u3067\u3001\u540C\u3058\u62C5\u5F53\u8005\u304C\u5BFE\u5FDC\u3057\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement(StepFlow, {
    style: {
      marginTop: 'var(--space-40)'
    },
    steps: window.NAKASE_STEPS.slice(0, 4)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-ink",
    style: {
      marginTop: 'var(--space-32)'
    },
    onClick: () => go('flow')
  }, "\u6D41\u308C\u3092\u8A73\u3057\u304F\u898B\u308B"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-mist)'
    },
    className: "nk-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "CASE",
    title: "\u5BFE\u5FDC\u4E8B\u4F8B",
    lead: "\u6CB3\u5DDD\u30FB\u6C34\u8DEF\u306E\u5DE5\u4E8B\u304B\u3089\u3001\u5730\u4E0B\u8EAF\u4F53\u306E\u6E67\u6C34\u51E6\u7406\u307E\u3067\u3002\u73FE\u5834\u306E\u898F\u6A21\u3092\u554F\u308F\u305A\u3054\u76F8\u8AC7\u3044\u305F\u3060\u3051\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('cases'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 16
    })
  }, "\u4E8B\u4F8B\u3092\u3082\u3063\u3068\u898B\u308B")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-gutter)',
      marginTop: 'var(--space-40)'
    }
  }, window.NAKASE_CASES.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.id,
    padding: "var(--space-16)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)',
      cursor: 'pointer'
    },
    onClick: () => go('caseDetail', null, c)
  }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "16 / 9",
    src: c.photo,
    alt: c.title,
    radius: "var(--radius-lg)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Tag, null, c.type), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-muted)'
    }
  }, c.area)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 700,
      lineHeight: 1.5,
      color: 'var(--ink-900)'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, c.ask)))))), /*#__PURE__*/React.createElement("section", {
    className: "nk-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-48)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "AREA",
    title: "\u5317\u6D77\u9053\u5168\u57DF\u306B\u3054\u5BFE\u5FDC\u3057\u307E\u3059\u3002",
    lead: "\u65ED\u5DDD\u5E02\u306E\u62E0\u70B9\u3092\u8D77\u70B9\u306B\u3001\u9053\u5185\u306E\u73FE\u5834\u3078\u6A5F\u6750\u3092\u304A\u5C4A\u3051\u3057\u3066\u3044\u307E\u3059\u3002\u73FE\u5834\u306E\u5834\u6240\u3092\u304A\u77E5\u3089\u305B\u3044\u305F\u3060\u3051\u308C\u3070\u3001\u642C\u5165\u306E\u65B9\u6CD5\u3068\u3042\u308F\u305B\u3066\u3054\u6848\u5185\u3057\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-ink",
    onClick: () => go('company'),
    style: {
      alignSelf: 'flex-start'
    }
  }, "\u4F1A\u793E\u6848\u5185\u3092\u898B\u308B")), /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "4 / 3",
    label: "\u5317\u6D77\u9053\u306E\u5BFE\u5FDC\u30A8\u30EA\u30A2\u56F3",
    note: "\u5236\u4F5C\u5074\u3067\u4F5C\u6210"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-mist)'
    },
    className: "nk-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "FAQ",
    title: "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F"
  }), /*#__PURE__*/React.createElement(FaqAccordion, {
    style: {
      marginTop: 'var(--space-32)'
    },
    items: window.NAKASE_FAQ
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-ink",
    style: {
      marginTop: 'var(--space-24)'
    },
    onClick: () => go('faq')
  }, "\u3059\u3079\u3066\u306E\u8CEA\u554F\u3092\u898B\u308B"))), /*#__PURE__*/React.createElement("section", {
    className: "nk-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 'var(--space-48)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "4 / 3",
    label: "\u5009\u5EAB\u30FB\u4FDD\u6709\u6A5F\u6750\u304C\u4E26\u3093\u3060\u5199\u771F",
    note: "\u64AE\u5F71\u5F85\u3061\uFF08\u512A\u5148\u5EA6B\uFF09"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "ABOUT",
    title: "\u682A\u5F0F\u4F1A\u793E\u6C34\u306E\u30CA\u30AB\u30BB\u306B\u3064\u3044\u3066",
    lead: "\u5317\u6D77\u9053\u65ED\u5DDD\u5E02\u3067\u3001\u6C34\u4E2D\u30DD\u30F3\u30D7\u3068\u95A2\u9023\u6A5F\u6750\u306E\u30EC\u30F3\u30BF\u30EB\u3092\u884C\u3063\u3066\u3044\u307E\u3059\u3002\u30DD\u30F3\u30D7\u672C\u4F53\u3060\u3051\u3067\u306A\u304F\u3001\u767A\u96FB\u6A5F\u30FB\u30DB\u30FC\u30B9\u30FB\u9001\u6C34\u7BA1\u307E\u3067\u4E00\u5F0F\u3067\u624B\u914D\u3067\u304D\u308B\u305F\u3081\u3001\u624B\u914D\u5148\u3092\u5206\u3051\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u6A5F\u6750\u306E\u9078\u5B9A\u304B\u3089\u642C\u5165\u30FB\u8A2D\u7F6E\u307E\u3067\u3001\u3072\u3068\u7D9A\u304D\u3067\u304A\u5F15\u304D\u53D7\u3051\u3057\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement(SpecTable, {
    dense: true,
    rows: window.NAKASE_COMPANY.slice(0, 4)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-ink",
    onClick: () => go('company'),
    style: {
      alignSelf: 'flex-start'
    }
  }, "\u4F1A\u793E\u6848\u5185\u3092\u898B\u308B")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductDetailScreen.jsx
try { (() => {
const {
  SectionHeading,
  SpecTable,
  MediaPlaceholder,
  ProductCard,
  Button,
  Notice,
  Card,
  Tag,
  Icon
} = window.DesignSystem_d5d132;
function ProductDetailScreen({
  go,
  model
}) {
  const p = model || window.NAKASE_PRODUCTS[0];
  const others = window.NAKASE_PRODUCTS.filter(x => x.model !== p.model).slice(0, 3);
  const PH = window.NAKASE_PHOTOS;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.PageHead, {
    go: go,
    crumbs: [{
      label: 'ホーム',
      key: 'home'
    }, {
      label: 'レンタル機材',
      key: 'products'
    }, {
      label: p.name
    }],
    eyebrow: p.cat,
    title: p.name
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--space-64)',
      marginTop: 'calc(var(--space-48) * -1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-48)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "4 / 3",
    src: p.image,
    fit: "contain",
    alt: p.name,
    label: "\u6A5F\u6750\u306E\u5199\u771F\uFF08\u767D\u629C\u304D\uFF09",
    note: "\u64AE\u5F71\u5F85\u3061",
    style: p.image ? {
      border: '1px solid var(--border-hairline)'
    } : null
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "1 / 1",
    src: PH.canalCrew,
    alt: "\u636E\u4ED8\u4F8B\uFF08\u6C34\u8DEF\uFF09",
    radius: "var(--radius-lg)"
  }), /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "1 / 1",
    src: PH.winterHoses,
    alt: "\u914D\u7BA1\u4F8B",
    radius: "var(--radius-lg)"
  }), /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "1 / 1",
    src: PH.urbanCanal,
    alt: "\u8907\u6570\u53F0\u3067\u306E\u904B\u7528\u4F8B",
    radius: "var(--radius-lg)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Tag, null, p.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption-md)',
      color: 'var(--text-muted)'
    }
  }, p.model)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, p.lead), /*#__PURE__*/React.createElement(SpecTable, {
    rows: p.specs,
    caption: "\u4ED5\u69D8"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: 'var(--space-16)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-mist)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-caption)',
      color: 'var(--text-muted)'
    }
  }, "\u60F3\u5B9A\u3055\u308C\u308B\u7528\u9014"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, p.use)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      flexWrap: 'wrap',
      padding: 'var(--space-16) 0',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, "\u30EC\u30F3\u30BF\u30EB\u6599\u91D1\u306F\u304A\u898B\u7A4D\u3082\u308A"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--text-muted)'
    }
  }, "\u53F0\u6570\u30FB\u4F7F\u7528\u671F\u9593\u30FB\u914D\u7BA1\u306E\u9577\u3055\u30FB\u73FE\u5834\u307E\u3067\u306E\u8DDD\u96E2\u306B\u3088\u308A\u5909\u308F\u308A\u307E\u3059\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-12)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('contact')
  }, "\u3053\u306E\u6A5F\u6750\u306B\u3064\u3044\u3066\u76F8\u8AC7\u3059\u308B"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-ink",
    size: "lg",
    onClick: () => go('support')
  }, "\u5BFE\u5FDC\u7BC4\u56F2\u3092\u898B\u308B"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-mist)'
    },
    className: "nk-band-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-48)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "\u3042\u308F\u305B\u3066\u5FC5\u8981\u306B\u306A\u308B\u6A5F\u6750",
    title: "\u3053\u306E\u6A5F\u6750\u3068\u4E00\u7DD2\u306B\u624B\u914D\u3067\u304D\u308B\u3082\u306E",
    lead: "\u30DD\u30F3\u30D7\u5358\u4F53\u3067\u306F\u306A\u304F\u3001\u914D\u7BA1\u3084\u96FB\u6E90\u307E\u3067\u542B\u3081\u305F\u69CB\u6210\u3067\u304A\u898B\u7A4D\u3082\u308A\u3057\u307E\u3059\u3002\u624B\u914D\u5148\u3092\u5206\u3051\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 'var(--space-20)'
    }
  }, (p.withItems || []).map(w => /*#__PURE__*/React.createElement(Tag, {
    key: w
  }, w))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-ink",
    style: {
      marginTop: 'var(--space-24)'
    },
    onClick: () => go('related'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 16
    })
  }, "\u95A2\u9023\u6A5F\u6750\u3092\u898B\u308B")), /*#__PURE__*/React.createElement(Notice, {
    tone: "info",
    title: "\u3053\u306E\u6A5F\u6750\u3067\u5408\u3063\u3066\u3044\u308B\u304B\u5206\u304B\u3089\u306A\u3044\u5834\u5408"
  }, "\u73FE\u5834\u306E\u6C34\u91CF\u30FB\u6392\u6C34\u8DDD\u96E2\u30FB\u6C34\u8CEA\u3092\u304A\u805E\u304B\u305B\u3044\u305F\u3060\u3051\u308C\u3070\u3001\u5FC5\u8981\u306A\u5410\u51FA\u91CF\u3068\u5168\u63DA\u7A0B\u3092\u7B97\u51FA\u3057\u3001\u6A5F\u7A2E\u3068\u53F0\u6570\u3092\u3054\u63D0\u6848\u3057\u307E\u3059\u3002\u3054\u6307\u5B9A\u306E\u6A5F\u7A2E\u304C\u3042\u308B\u5834\u5408\u306F\u305D\u306E\u307E\u307E\u624B\u914D\u3057\u307E\u3059\u3002"))), /*#__PURE__*/React.createElement("section", {
    className: "nk-band-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "OTHER MODELS",
    title: "\u307B\u304B\u306E\u6A5F\u6750"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-gutter)',
      marginTop: 'var(--space-32)'
    }
  }, others.map(x => /*#__PURE__*/React.createElement(ProductCard, {
    key: x.model,
    name: x.name,
    model: x.model,
    image: x.image,
    specs: x.specs.slice(0, 3),
    ctaLabel: "\u3053\u306E\u6A5F\u6750\u306B\u3064\u3044\u3066\u76F8\u8AC7\u3059\u308B",
    onSelect: () => go('detail', x)
  }))))));
}
Object.assign(window, {
  ProductDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductsScreen.jsx
try { (() => {
const {
  CategoryTabs,
  SectionHeading,
  ProductCard,
  Notice,
  Card,
  SpecTable,
  MediaPlaceholder,
  Button,
  Icon
} = window.DesignSystem_d5d132;
function ProductsScreen({
  go
}) {
  const [cat, setCat] = React.useState('すべて');
  const list = window.NAKASE_PRODUCTS.filter(p => cat === 'すべて' || p.cat === cat);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.PageHead, {
    go: go,
    crumbs: [{
      label: 'ホーム',
      key: 'home'
    }, {
      label: 'レンタル機材'
    }],
    eyebrow: "RENTAL LINEUP",
    title: "\u30EC\u30F3\u30BF\u30EB\u3067\u304D\u308B\u6C34\u4E2D\u30DD\u30F3\u30D7",
    lead: "\u53E3\u5F84 50mm \u304B\u3089 150mm \u307E\u3067\u3001\u7528\u9014\u5225\u306B\u3054\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u3002\u6A5F\u7A2E\u304C\u6C7A\u307E\u3063\u3066\u3044\u306A\u3044\u6BB5\u968E\u304B\u3089\u3054\u76F8\u8AC7\u3044\u305F\u3060\u3051\u307E\u3059\u3002",
    aside: /*#__PURE__*/React.createElement(MediaPlaceholder, {
      ratio: "16 / 9",
      src: window.NAKASE_PHOTOS.winterHoses,
      alt: "\u914D\u7BA1\u3092\u542B\u3081\u305F\u73FE\u5834\u636E\u4ED8\u306E\u4F8B"
    })
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--space-64)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap"
  }, /*#__PURE__*/React.createElement(CategoryTabs, {
    items: window.NAKASE_CATEGORIES,
    value: cat,
    onChange: setCat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-gutter)',
      marginTop: 'var(--space-32)'
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.model,
    name: p.name,
    model: p.model,
    image: p.image,
    imageLabel: "\u6A5F\u6750\u5199\u771F",
    specs: p.specs.slice(0, 3),
    ctaLabel: "\u3053\u306E\u6A5F\u6750\u306B\u3064\u3044\u3066\u76F8\u8AC7\u3059\u308B",
    onSelect: () => go('detail', p)
  }))), /*#__PURE__*/React.createElement(Notice, {
    tone: "info",
    title: "\u30EC\u30F3\u30BF\u30EB\u6599\u91D1\u306B\u3064\u3044\u3066",
    style: {
      marginTop: 'var(--space-32)'
    }
  }, "\u6599\u91D1\u306F\u30B5\u30A4\u30C8\u306B\u63B2\u8F09\u3057\u3066\u3044\u307E\u305B\u3093\u3002\u6A5F\u6750\u306E\u7A2E\u985E\u30FB\u53F0\u6570\u30FB\u4F7F\u7528\u671F\u9593\u30FB\u914D\u7BA1\u306E\u9577\u3055\u30FB\u73FE\u5834\u307E\u3067\u306E\u8DDD\u96E2\u306B\u3088\u3063\u3066\u5909\u308F\u308B\u305F\u3081\u3001\u73FE\u5834\u6761\u4EF6\u3092\u4F3A\u3063\u305F\u3046\u3048\u3067\u4E00\u5F0F\u3067\u3054\u63D0\u793A\u3057\u307E\u3059\u3002"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-mist)'
    },
    className: "nk-band-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-48)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "\u9078\u5B9A\u306B\u3064\u3044\u3066",
    title: "\u304A\u805E\u304B\u305B\u3044\u305F\u3060\u304D\u305F\u3044\u6761\u4EF6",
    lead: "\u4E0B\u8A18\u304C\u5206\u304B\u308B\u3068\u6A5F\u7A2E\u3068\u53F0\u6570\u3092\u3054\u63D0\u6848\u3067\u304D\u307E\u3059\u3002\u3059\u3079\u3066\u5206\u304B\u3089\u306A\u304F\u3066\u3082\u69CB\u3044\u307E\u305B\u3093\u3002\u5206\u304B\u308B\u7BC4\u56F2\u3067\u304A\u77E5\u3089\u305B\u304F\u3060\u3055\u3044\u3002"
  }), /*#__PURE__*/React.createElement(SpecTable, {
    style: {
      marginTop: 'var(--space-24)'
    },
    dense: true,
    rows: [{
      label: '水量',
      value: '排水したい水量、または現場の広さと水深',
      mono: false
    }, {
      label: '距離・高低差',
      value: '排水先までの距離と高低差',
      mono: false
    }, {
      label: '水質',
      value: '清水／泥水／土砂混じり／汚水',
      mono: false
    }, {
      label: '電源',
      value: '三相200V／単相100V／電源なし',
      mono: false
    }, {
      label: '期間',
      value: '使用開始時期と、おおよその期間',
      mono: false
    }, {
      label: '場所',
      value: '現場の市町村',
      mono: false
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    elevated: false,
    bordered: true,
    padding: "var(--space-24)"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, "\u6A5F\u7A2E\u306E\u9078\u3073\u65B9\u306E\u76EE\u5B89"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, "\u5FC5\u8981\u306A\u5410\u51FA\u91CF\u306F\u300C\u6392\u6C34\u3057\u305F\u3044\u6C34\u91CF \xF7 \u6642\u9593\u300D\u3001\u5168\u63DA\u7A0B\u306F\u300C\u5782\u76F4\u8DDD\u96E2\uFF0B\u914D\u7BA1\u62B5\u6297\u300D\u3067\u6982\u7B97\u3057\u307E\u3059\u3002\u3053\u306E\u8A08\u7B97\u305D\u306E\u3082\u306E\u304B\u3089\u3054\u76F8\u8AC7\u3044\u305F\u3060\u3051\u307E\u3059\u3002")), /*#__PURE__*/React.createElement(Notice, {
    tone: "ok",
    title: "\u95A2\u9023\u6A5F\u6750\u3082\u3042\u308F\u305B\u3066\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044"
  }, "\u30DD\u30F3\u30D7\u306E\u53E3\u5F84\u3068\u96FB\u6E90\u4ED5\u69D8\u304C\u6C7A\u307E\u308B\u3068\u3001\u5FC5\u8981\u306A\u30DB\u30FC\u30B9\u306E\u5F84\u3084\u767A\u96FB\u6A5F\u306E\u51FA\u529B\u3082\u6C7A\u307E\u308A\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-ink",
    onClick: () => go('related'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 16
    })
  }, "\u95A2\u9023\u6A5F\u6750\u3092\u898B\u308B")))), /*#__PURE__*/React.createElement(window.AskBlock, {
    go: go,
    title: "\u6A5F\u7A2E\u304C\u6C7A\u307E\u3063\u3066\u3044\u306A\u304F\u3066\u3082\u69CB\u3044\u307E\u305B\u3093\u3002",
    lead: "\u73FE\u5834\u306E\u72B6\u6CC1\u3092\u304A\u805E\u304B\u305B\u3044\u305F\u3060\u3051\u308C\u3070\u3001\u5FC5\u8981\u306A\u5410\u51FA\u91CF\u3068\u5168\u63DA\u7A0B\u304B\u3089\u6A5F\u7A2E\u3068\u53F0\u6570\u3092\u3054\u63D0\u6848\u3057\u307E\u3059\u3002",
    label: "\u6A5F\u6750\u9078\u3073\u304B\u3089\u76F8\u8AC7\u3059\u308B"
  }));
}
Object.assign(window, {
  ProductsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RelatedScreen.jsx
try { (() => {
const {
  Card,
  SectionHeading,
  MediaPlaceholder,
  SpecTable,
  Notice,
  Button,
  Icon
} = window.DesignSystem_d5d132;
function RelatedScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.PageHead, {
    go: go,
    crumbs: [{
      label: 'ホーム',
      key: 'home'
    }, {
      label: '関連機材'
    }],
    eyebrow: "RELATED EQUIPMENT",
    title: "\u30DD\u30F3\u30D7\u3060\u3051\u3067\u306F\u3001\u73FE\u5834\u306F\u52D5\u304D\u307E\u305B\u3093\u3002",
    lead: "\u767A\u96FB\u6A5F\u30FB\u30DB\u30FC\u30B9\u30FB\u9001\u6C34\u7BA1\u307E\u3067\u3001\u73FE\u5834\u306B\u5FC5\u8981\u306A\u6A5F\u6750\u3092\u4E00\u5F0F\u3067\u3054\u76F8\u8AC7\u3044\u305F\u3060\u3051\u307E\u3059\u3002\u30DD\u30F3\u30D7\u3068\u540C\u3058\u7A93\u53E3\u3067\u624B\u914D\u3067\u304D\u308B\u305F\u3081\u3001\u8907\u6570\u793E\u306B\u554F\u3044\u5408\u308F\u305B\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u305B\u3093\u3002"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--space-64)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-32)'
    }
  }, window.NAKASE_RELATED.map((r, i) => /*#__PURE__*/React.createElement(Card, {
    key: r.key,
    elevated: false,
    bordered: true,
    padding: "var(--space-32)",
    style: {
      display: 'grid',
      gridTemplateColumns: '260px 1fr',
      gap: 'var(--space-40)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
    ratio: "1 / 1",
    label: r.photo,
    note: r.photoNote,
    radius: "var(--radius-lg)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 24,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, r.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      maxWidth: 620
    }
  }, r.lead), /*#__PURE__*/React.createElement(SpecTable, {
    dense: true,
    rows: r.rows.map(x => ({
      label: x.label,
      value: x.value,
      mono: x.value !== '要確認' && x.value.length < 12
    }))
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--space-64)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-gutter)'
    }
  }, /*#__PURE__*/React.createElement(Notice, {
    tone: "info",
    title: "\u624B\u914D\u306E\u8003\u3048\u65B9"
  }, "\u95A2\u9023\u6A5F\u6750\u306F\u6848\u4EF6\u306B\u5FDC\u3058\u3066\u624B\u914D\u3044\u305F\u3057\u307E\u3059\u3002\u3054\u5E0C\u671B\u306E\u4ED5\u69D8\u30FB\u6570\u91CF\u306B\u3064\u3044\u3066\u306F\u3001\u6642\u671F\u306B\u3088\u3063\u3066\u624B\u914D\u306E\u53EF\u5426\u304C\u7570\u306A\u308A\u307E\u3059\u306E\u3067\u3001\u307E\u305A\u306F\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002"), /*#__PURE__*/React.createElement(Notice, {
    tone: "ok",
    title: "\u30DD\u30F3\u30D7\u3068\u4E00\u7DD2\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044"
  }, "\u30DD\u30F3\u30D7\u306E\u53E3\u5F84\u30FB\u96FB\u6E90\u4ED5\u69D8\u304C\u6C7A\u307E\u308B\u3068\u3001\u5FC5\u8981\u306A\u30DB\u30FC\u30B9\u306E\u5F84\u3084\u767A\u96FB\u6A5F\u306E\u51FA\u529B\u3082\u6C7A\u307E\u308A\u307E\u3059\u3002\u6A5F\u6750\u304C\u6C7A\u307E\u3063\u3066\u3044\u306A\u3044\u6BB5\u968E\u304B\u3089\u3054\u76F8\u8AC7\u3044\u305F\u3060\u304F\u307B\u3046\u304C\u3001\u69CB\u6210\u306B\u7121\u99C4\u304C\u51FA\u307E\u305B\u3093\u3002"))), /*#__PURE__*/React.createElement(window.AskBlock, {
    go: go,
    title: "\u5FC5\u8981\u306A\u6A5F\u6750\u304C\u5206\u304B\u3089\u306A\u304F\u3066\u3082\u69CB\u3044\u307E\u305B\u3093\u3002",
    lead: "\u73FE\u5834\u306E\u72B6\u6CC1\u3092\u304A\u805E\u304B\u305B\u3044\u305F\u3060\u3051\u308C\u3070\u3001\u30DD\u30F3\u30D7\u3068\u95A2\u9023\u6A5F\u6750\u3092\u3042\u308F\u305B\u305F\u69CB\u6210\u3092\u3054\u63D0\u6848\u3057\u307E\u3059\u3002",
    label: "\u6A5F\u6750\u4E00\u5F0F\u3067\u76F8\u8AC7\u3059\u308B"
  }));
}
Object.assign(window, {
  RelatedScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RelatedScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SupportScreen.jsx
try { (() => {
const {
  Card,
  SectionHeading,
  MediaPlaceholder,
  Notice,
  Button,
  Icon,
  StepFlow
} = window.DesignSystem_d5d132;
function ScopeList({
  title,
  items,
  icon,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption-md)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-caption)',
      color: 'var(--text-muted)'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, items.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14,
    color: color
  })), t))));
}
function SupportScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.PageHead, {
    go: go,
    crumbs: [{
      label: 'ホーム',
      key: 'home'
    }, {
      label: 'サポート内容'
    }],
    eyebrow: "SUPPORT",
    title: "\u8A08\u753B\u304B\u3089\u8A2D\u7F6E\u307E\u3067\u3001\u7A93\u53E3\u306F\u3072\u3068\u3064\u3002",
    lead: "\u6A5F\u6750\u3092\u304A\u8CB8\u3057\u3059\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u6392\u6C34\u306E\u8A08\u753B\u3001\u6A5F\u6750\u306E\u9078\u5B9A\u3001\u642C\u5165\u3001\u8A2D\u7F6E\u307E\u3067\u3054\u76F8\u8AC7\u3044\u305F\u3060\u3051\u307E\u3059\u3002\u3069\u306E\u6BB5\u968E\u304B\u3089\u304A\u58F0\u304C\u3051\u3044\u305F\u3060\u3044\u3066\u3082\u69CB\u3044\u307E\u305B\u3093\u3002",
    aside: /*#__PURE__*/React.createElement(MediaPlaceholder, {
      ratio: "16 / 9",
      label: "\u6253\u3061\u5408\u308F\u305B\u30FB\u73FE\u5834\u8ABF\u67FB\u306E\u5199\u771F",
      note: "\u64AE\u5F71\u5F85\u3061\uFF08\u512A\u5148\u5EA6C\uFF09"
    })
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--space-64)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-24)'
    }
  }, window.NAKASE_SUPPORT.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.key,
    elevated: false,
    bordered: true,
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-mist)',
      padding: 'var(--space-32)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)',
      borderRight: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--color-primary)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 28,
    color: "var(--ink-900)"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 700,
      lineHeight: 1.4,
      color: 'var(--ink-900)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, s.lead)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-32)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-32)'
    }
  }, /*#__PURE__*/React.createElement(ScopeList, {
    title: "\u5BFE\u5FDC\u3059\u308B\u5185\u5BB9",
    items: s.todo,
    icon: "check",
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement(ScopeList, {
    title: "\u304A\u805E\u304B\u305B\u3044\u305F\u3060\u304D\u305F\u3044\u3053\u3068",
    items: s.bring,
    icon: "circle",
    color: "var(--text-faint)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      gridColumn: '1 / -1',
      margin: 0,
      padding: 'var(--space-16)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-tint)',
      fontSize: 'var(--fs-caption-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, s.scope))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-mist)'
    },
    className: "nk-band-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "HOW IT WORKS",
    title: "\u3054\u76F8\u8AC7\u304B\u3089\u8A2D\u7F6E\u307E\u3067\u306E\u6D41\u308C"
  }), /*#__PURE__*/React.createElement(StepFlow, {
    style: {
      marginTop: 'var(--space-32)'
    },
    steps: window.NAKASE_STEPS.slice(0, 4)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-ink",
    style: {
      marginTop: 'var(--space-24)'
    },
    onClick: () => go('flow')
  }, "\u6D41\u308C\u3092\u8A73\u3057\u304F\u898B\u308B"))), /*#__PURE__*/React.createElement(window.AskBlock, {
    go: go,
    title: "\u3069\u306E\u6BB5\u968E\u304B\u3089\u3067\u3082\u3001\u3054\u76F8\u8AC7\u3044\u305F\u3060\u3051\u307E\u3059\u3002",
    lead: "\u300C\u4F55\u3092\u501F\u308A\u308C\u3070\u3044\u3044\u304B\u5206\u304B\u3089\u306A\u3044\u300D\u304B\u3089\u3067\u69CB\u3044\u307E\u305B\u3093\u3002\u73FE\u5834\u306E\u72B6\u6CC1\u3092\u304A\u805E\u304B\u305B\u304F\u3060\u3055\u3044\u3002",
    label: "\u5BFE\u5FDC\u7BC4\u56F2\u3092\u76F8\u8AC7\u3059\u308B"
  }));
}
Object.assign(window, {
  SupportScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SupportScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ThanksScreen.jsx
try { (() => {
const {
  Card,
  Button,
  Icon,
  SpecTable
} = window.DesignSystem_d5d132;
function ThanksScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", {
    className: "nk-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap",
    style: {
      maxWidth: 720,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 'var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--surface-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 30,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-lg)',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, "\u304A\u554F\u3044\u5408\u308F\u305B\u3092\u53D7\u3051\u4ED8\u3051\u307E\u3057\u305F\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, "\u3054\u5165\u529B\u3044\u305F\u3060\u3044\u305F\u5185\u5BB9\u3092\u78BA\u8A8D\u306E\u3046\u3048\u3001\u62C5\u5F53\u8005\u3088\u308A\u3054\u9023\u7D61\u3044\u305F\u3057\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "\u304A\u6025\u304E\u306E\u5834\u5408\u306F\u3001\u304A\u96FB\u8A71\u3067\u3082\u3054\u76F8\u8AC7\u3044\u305F\u3060\u3051\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(Card, {
    surface: "mist",
    elevated: false,
    bordered: true,
    padding: "var(--space-24)",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(SpecTable, {
    dense: true,
    rows: [{
      label: 'ご返信の目安',
      value: '要確認',
      mono: false
    }, {
      label: 'お電話',
      value: '0166-34-2311'
    }, {
      label: '受付時間',
      value: '要確認',
      mono: false
    }]
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-ink",
    onClick: () => go('home')
  }, "\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8\u3078\u623B\u308B")));
}
Object.assign(window, {
  ThanksScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ThanksScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.jsx
try { (() => {
/* UI キット用データ。docs/site-content-plan.md に基づく構成。
   写真：現場 4 点・機材 3 点はナカセ様支給の実写真。未支給分は MediaPlaceholder のスロットで場所を確保している。
   仕様値・事例・会社概要は仮の値（公開前に差し替え）。料金は方針として非掲載。 */
const IMG = '../../assets/photos/';
window.NAKASE_PHOTOS = {
  channelSunset: IMG + 'site-channel-sunset.webp',
  urbanCanal: IMG + 'site-urban-canal.webp',
  canalCrew: IMG + 'site-canal-crew.webp',
  winterHoses: IMG + 'site-winter-hoses.webp'
};

/* S2 訪問者の困りごと */
window.NAKASE_PAINS = [{
  icon: 'gauge',
  title: '口径の合うポンプが足りない',
  body: '工期中の水替えで、自社保有の機材では吐出量が足りない。台数を増やしたい。'
}, {
  icon: 'zap-off',
  title: '現場に電源がない',
  body: '仮設の電源が引けない場所で、発電機ごと手配したい。'
}, {
  icon: 'help-circle',
  title: 'どの機種を何台使えばいいか分からない',
  body: '必要な水量の見当がつかない。計算から相談したい。'
}, {
  icon: 'split',
  title: '手配先を分けるのが手間',
  body: 'ポンプ、ホース、送水管、発電機。別々の会社に連絡するのが煩わしい。'
}];

/* レンタル機材（水中ポンプ） */
window.NAKASE_CATEGORIES = ['すべて', '汚水・雑排水用', '残水用', '大水量', 'サンド（土砂混じり）'];
window.NAKASE_PRODUCTS = [{
  name: '大水量水中ポンプ 150mm',
  model: 'F-1660A',
  cat: '大水量',
  image: IMG + 'pump-f-1660a.png',
  lead: '河川切り回しや大規模な水替えのための大口径機。吐出エルボを組んだ状態で搬入でき、据付から通水までが早い一台です。',
  use: '河川改修、護岸工事、大規模な仮排水',
  specs: [{
    label: '口径',
    value: '150 mm'
  }, {
    label: '吐出量',
    value: '2.4 m³/min'
  }, {
    label: '全揚程',
    value: '22 m'
  }, {
    label: '電源',
    value: '三相 200V'
  }, {
    label: '質量',
    value: '98 kg'
  }],
  withItems: ['吐出ホース 150mm', '送水管・継手', 'エンジン発電機']
}, {
  name: 'サンド用水中ポンプ 100mm',
  model: 'KRS-1022-51',
  cat: 'サンド（土砂混じり）',
  image: IMG + 'pump-krs-1022-51.png',
  lead: '土砂を含む濁水の移送に。耐摩耗の羽根車とストレーナで、掘削底の泥水を長時間送り続けられます。',
  use: '掘削底の泥水処理、浚渫、土砂混じりの湧水',
  specs: [{
    label: '口径',
    value: '100 mm'
  }, {
    label: '吐出量',
    value: '0.9 m³/min'
  }, {
    label: '全揚程',
    value: '15 m'
  }, {
    label: '電源',
    value: '三相 200V'
  }, {
    label: '質量',
    value: '52 kg'
  }],
  withItems: ['サクションホース 100mm', '吐出ホース 100mm']
}, {
  name: '汚水・排水用水中ポンプ 150mm',
  model: 'U-65014',
  cat: '汚水・雑排水用',
  image: IMG + 'pump-u-65014.png',
  lead: '吊り下げたまま投入できる汎用機。連続運転に強く、水路や仮設ピットの常設排水に向きます。',
  use: '水路の切り回し、仮設ピットの常設排水',
  specs: [{
    label: '口径',
    value: '150 mm'
  }, {
    label: '吐出量',
    value: '1.6 m³/min'
  }, {
    label: '全揚程',
    value: '14 m'
  }, {
    label: '電源',
    value: '三相 200V'
  }, {
    label: '質量',
    value: '74 kg'
  }],
  withItems: ['吐出ホース 150mm', 'フロートスイッチ']
}, {
  name: '汚水用水中ポンプ 80mm',
  model: 'NK-80SW',
  cat: '汚水・雑排水用',
  lead: 'もっとも出番の多い標準機。湧水・雨水の水替えはこの口径から検討します。',
  use: '地下躯体工事の湧水処理、雨水の排水',
  specs: [{
    label: '口径',
    value: '80 mm'
  }, {
    label: '吐出量',
    value: '0.35 m³/min'
  }, {
    label: '全揚程',
    value: '12 m'
  }, {
    label: '電源',
    value: '三相 200V'
  }, {
    label: '質量',
    value: '23 kg'
  }],
  withItems: ['吐出ホース 80mm', '延長ケーブル']
}, {
  name: '汚水用水中ポンプ 50mm',
  model: 'NK-50SW',
  cat: '汚水・雑排水用',
  lead: '単相 100V で動く小型機。仮設電源しかない現場や、狭い立坑での使用に向きます。',
  use: '狭所の排水、小規模な湧水処理',
  specs: [{
    label: '口径',
    value: '50 mm'
  }, {
    label: '吐出量',
    value: '0.16 m³/min'
  }, {
    label: '全揚程',
    value: '10 m'
  }, {
    label: '電源',
    value: '単相 100V'
  }, {
    label: '質量',
    value: '11 kg'
  }],
  withItems: ['吐出ホース 50mm', '延長ケーブル']
}, {
  name: '残水用水中ポンプ 50mm',
  model: 'NK-50RS',
  cat: '残水用',
  lead: '残水位 1mm まで吸い上げる仕上げ用。床面の水を落としきりたい工程で使います。',
  use: '躯体の床仕上げ前、貯水槽の清掃',
  specs: [{
    label: '口径',
    value: '50 mm'
  }, {
    label: '残水位',
    value: '1 mm'
  }, {
    label: '全揚程',
    value: '8 m'
  }, {
    label: '電源',
    value: '単相 100V'
  }, {
    label: '質量',
    value: '9 kg'
  }],
  withItems: ['吐出ホース 50mm']
}];

/* 関連機材 */
window.NAKASE_RELATED = [{
  key: 'generator',
  icon: 'zap',
  title: '発電機',
  lead: '電源のない現場、仮設電源の容量が足りない現場に。ポンプの電源仕様に合わせて出力を選定します。',
  rows: [{
    label: '出力',
    value: '要確認'
  }, {
    label: '燃料',
    value: '要確認'
  }, {
    label: '相・電圧',
    value: '要確認'
  }],
  photo: '発電機の写真（白抜き・1:1）',
  photoNote: '撮影待ち（優先度A）'
}, {
  key: 'hose',
  icon: 'git-commit-horizontal',
  title: 'ホース',
  lead: 'サクション（吸込）・吐出の両方を扱います。ポンプの口径と排水距離に合わせて長さを組みます。',
  rows: [{
    label: '種別',
    value: 'サクション／吐出'
  }, {
    label: '口径',
    value: '要確認'
  }, {
    label: '長さの単位',
    value: '要確認'
  }],
  photo: 'ホースの写真（巻いた状態・1:1）',
  photoNote: '撮影待ち（優先度A）'
}, {
  key: 'pipe',
  icon: 'minus',
  title: '送水管',
  lead: '長距離の排水や、車両の通行がある場所での配管に。継手を含めて構成をご提案します。',
  rows: [{
    label: '材質',
    value: '要確認'
  }, {
    label: '口径',
    value: '要確認'
  }, {
    label: '継手',
    value: '要確認'
  }],
  photo: '送水管の写真（1:1）',
  photoNote: '撮影待ち（優先度A）'
}, {
  key: 'other',
  icon: 'package',
  title: 'その他の関連機材',
  lead: 'フロートスイッチ、延長ケーブル、制御盤など。現場の運用に必要なものをあわせて手配します。',
  rows: [{
    label: '取扱範囲',
    value: '要確認'
  }],
  photo: '付帯機材の写真（1:1）',
  photoNote: '撮影待ち（優先度B）'
}];

/* サポート内容 */
window.NAKASE_SUPPORT = [{
  key: 'plan',
  icon: 'file-text',
  title: '計画',
  lead: '現場の状況を伺い、排水の方法と必要な機材構成をご提案します。',
  todo: ['現場の水量・水深・排水先の条件を確認', '排水の方法と機材構成を提案', '必要に応じて複数案をご提示'],
  bring: ['現場の場所', '排水したい水量、または現場の広さと水深', '排水先までの距離と高低差'],
  scope: '図面がなくてもご相談いただけます。着工前の計画段階からお声がけください。'
}, {
  key: 'select',
  icon: 'search-check',
  title: '機材選定',
  lead: '必要な吐出量と全揚程を算出し、機種と台数を決めます。',
  todo: ['必要な吐出量・全揚程の算出', '機種と台数の決定', '関連機材（ホース・配管・電源）の構成'],
  bring: ['水質（清水／泥水／土砂混じり／汚水）', '現場の電源の有無', '使用期間の目安'],
  scope: '機種が決まっていない段階からご相談いただけます。ご指定の機種がある場合はそのまま手配します。'
}, {
  key: 'deliver',
  icon: 'truck',
  title: '搬入',
  lead: '現場まで機材一式をお届けします。',
  todo: ['機材一式の積み込みと輸送', '現場での荷降ろし', '数量・状態の確認'],
  bring: ['搬入希望日時', '現場までの経路と、大型車が入れるかどうか', '荷降ろし場所'],
  scope: '搬入日時はご相談のうえ決定します。'
}, {
  key: 'install',
  icon: 'wrench',
  title: '設置',
  lead: '現場での据付、配管の接続、試運転までを行います。',
  todo: ['ポンプの据付', '吸込・吐出配管の接続', '電源の接続と試運転', '運転方法のご説明'],
  bring: ['据付位置', '電源の位置と容量', '立ち会いいただける方'],
  scope: '案件により対応できる範囲が異なります。お客様のほうで設置いただくことも可能です。まずはご相談ください。'
}, {
  key: 'calc',
  icon: 'calculator',
  title: '水理計算・流量測定のご相談',
  lead: '必要な水量や揚程の算出について、ご相談を承ります。',
  todo: ['必要水量・全揚程の考え方についてのご相談', '配管抵抗を含めた検討', '流量測定に関するご相談'],
  bring: ['現場の平面図・断面図（あれば）', 'これまでの排水実績（あれば）'],
  scope: 'ご相談の範囲や費用については、内容を伺ったうえでご案内します。'
}];

/* ご相談の流れ */
window.NAKASE_STEPS = [{
  title: 'お問い合わせ',
  body: 'お電話またはフォームから、現場の状況をお知らせください。',
  tell: '現場の場所／使用時期／排水したい水量（分かる範囲で）'
}, {
  title: 'ヒアリング・ご提案',
  body: '水質、電源、排水先の条件を伺い、機材の構成をご提案します。',
  tell: '水質／電源の有無／排水先までの距離と高低差'
}, {
  title: 'お見積もり',
  body: '機材・期間・搬入設置の範囲を含めた見積書をお出しします。',
  tell: '使用期間の目安／見積書の宛名と提出期限'
}, {
  title: '搬入・設置',
  body: 'ご指定の日時に機材をお届けし、据付から試運転まで行います。',
  tell: '搬入希望日時／現場の受け入れ体制'
}, {
  title: 'ご利用中・ご返却',
  body: '期間中の増設や機種変更もご相談ください。終了のご連絡で集荷に伺います。',
  tell: '工期の変更／機材の追加・変更のご希望'
}];

/* 対応事例（構成の見本。内容はすべて仮 — 掲載可否と実データは要確認） */
window.NAKASE_CASES = [{
  id: 'c1',
  photo: window.NAKASE_PHOTOS.urbanCanal,
  type: '河川・水路',
  area: '上川管内',
  title: '市街地の水路改修工事で、通水を止めずに施工',
  ask: '水路の改修にあたり、上流からの流れを止めずに施工したいというご相談。',
  site: '市街地の既設水路。両岸の作業帯が狭く、大型の機材が入れない。電源は仮設が引ける状態。',
  gear: '汚水・排水用水中ポンプ 150mm ×2台、吐出ホース 150mm、送水管',
  scope: ['計画', '機材選定', '搬入', '設置'],
  period: '約 6 週間',
  result: '両岸に 1 台ずつ据え付け、下流側へ切り回して施工。工期中に流量が増えた際は機材を追加。'
}, {
  id: 'c2',
  photo: window.NAKASE_PHOTOS.canalCrew,
  type: '水路切り回し',
  area: '上川管内',
  title: '護岸工事の仮排水。配管の取り回しから相談',
  ask: '護岸の築造にあたり、どの機材をどう配置すればよいか分からないというご相談。',
  site: '郊外の河川。排水先まで距離があり、途中に管理用道路の横断がある。',
  gear: '大水量水中ポンプ 150mm、送水管、継手一式',
  scope: ['計画', '機材選定', '搬入', '設置'],
  period: '約 3 か月',
  result: '道路横断部を送水管に切り替え、車両通行を確保したうえで排水経路を構成。'
}, {
  id: 'c3',
  photo: window.NAKASE_PHOTOS.winterHoses,
  type: '冬期施工',
  area: '上川管内',
  title: '冬期の仮排水。凍結対策を含めて構成',
  ask: '冬季施工にあたり、配管の凍結が心配というご相談。',
  site: '寒冷地の現場。夜間の気温が氷点下になる。',
  gear: '汚水用水中ポンプ 80mm ×2台、吐出ホース 80mm',
  scope: ['計画', '機材選定', '搬入'],
  period: '約 4 週間',
  result: '夜間の停止時に水が残らない配管ルートを検討し、保温材とあわせて構成。'
}];

/* よくあるご質問（カテゴリー別） */
window.NAKASE_FAQ_GROUPS = [{
  cat: 'レンタルについて',
  items: [{
    q: '機種が決まっていなくても相談できますか？',
    a: 'はい。現場の状況をお聞かせいただければ、必要な吐出量と全揚程から機種と台数をご提案します。「何を借りればいいか分からない」という段階からのご相談がもっとも多いです。'
  }, {
    q: '初めての利用ですが、何を伝えればいいですか？',
    a: '現場の場所、使用したい時期、排水したい水量（または現場の広さと水深）の 3 点が分かれば話が進みます。分からない項目があっても構いません。'
  }, {
    q: '途中で機材を追加・変更できますか？',
    a: 'ご相談ください。工期中に水量が想定を超えることはよくあります。'
  }]
}, {
  cat: '料金について',
  items: [{
    q: '料金はどのように決まりますか？',
    a: '機材の種類・台数・使用期間・配管の長さ・現場までの距離によって変わります。現場条件を伺ったうえで、一式でお見積もりをお出しします。'
  }, {
    q: '水理計算・流量測定の相談は無料ですか？',
    a: 'ご相談の範囲や費用については、内容を伺ったうえでご案内します。まずはお問い合わせください。'
  }]
}, {
  cat: '対応エリアについて',
  items: [{
    q: 'どのエリアまで対応できますか？',
    a: '北海道全域にご対応します。旭川市の拠点を起点に、道内の現場へお届けしています。'
  }, {
    q: '遠方でも相談できますか？',
    a: 'はい。現場の場所をお知らせいただければ、搬入の方法とあわせてご案内します。'
  }]
}, {
  cat: '機材について',
  items: [{
    q: '発電機やホースもまとめて借りられますか？',
    a: 'はい。ポンプ本体に加え、発電機・ホース・送水管まで一式でご相談いただけます。手配先を分ける必要はありません。'
  }, {
    q: '電源のない現場でも使えますか？',
    a: '発電機をあわせて手配します。ポンプの電源仕様に合った出力を選定します。'
  }, {
    q: 'ポンプの選び方が分かりません。',
    a: '必要な吐出量は「排水したい水量 ÷ 時間」、全揚程は「垂直距離＋配管抵抗」で概算します。この計算からご相談いただけます。'
  }]
}, {
  cat: '搬入・設置について',
  items: [{
    q: '設置までお願いできますか？',
    a: 'ご相談ください。案件により対応できる範囲が異なります。お客様のほうで設置いただくことも可能です。'
  }, {
    q: '立ち会いは必要ですか？',
    a: '据付位置や電源の確認が必要なため、現場の状況をご存じの方にお立ち会いいただけると確実です。'
  }]
}];
window.NAKASE_FAQ = window.NAKASE_FAQ_GROUPS[0].items.concat(window.NAKASE_FAQ_GROUPS[1].items).slice(0, 5);

/* 会社概要（住所・電話以外は仮） */
window.NAKASE_COMPANY = [{
  label: '商号',
  value: '株式会社水のナカセ',
  mono: false
}, {
  label: '所在地',
  value: '〒078-8233　北海道旭川市豊岡3条8丁目3番19号',
  mono: false
}, {
  label: '電話番号',
  value: '0166-34-2311'
}, {
  label: '事業内容',
  value: '水中ポンプおよび関連機材のレンタル、機材選定・搬入・設置',
  mono: false
}, {
  label: '対応エリア',
  value: '北海道全域',
  mono: false
}, {
  label: '設立',
  value: '要確認',
  mono: false
}, {
  label: '代表者',
  value: '要確認',
  mono: false
}, {
  label: '資本金',
  value: '要確認',
  mono: false
}, {
  label: '営業時間',
  value: '要確認',
  mono: false
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
const {
  Breadcrumb,
  SectionHeading,
  Notice,
  Button,
  Card,
  MediaPlaceholder,
  Icon,
  Tag
} = window.DesignSystem_d5d132;

/* 下層ページ共通の頭：パンくず＋見出し（＋右に補助要素） */
function PageHead({
  crumbs,
  eyebrow,
  title,
  lead,
  aside,
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: crumbs.map(c => c.key ? {
      label: c.label,
      href: '#',
      onClick: () => go(c.key)
    } : {
      label: c.label
    })
  }), /*#__PURE__*/React.createElement("section", {
    className: "nk-band-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap",
    style: aside ? {
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 'var(--space-48)',
      alignItems: 'center'
    } : null
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    as: "h1",
    eyebrow: eyebrow,
    title: title,
    lead: lead
  }), aside)));
}

/* 未確認情報が含まれるページに出す帯（公開前に削除する） */
function DraftNotice({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap",
    style: {
      paddingBottom: 'var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement(Notice, {
    tone: "warn",
    title: "\u3053\u306E\u30DA\u30FC\u30B8\u306E\u5185\u5BB9\u306F\u78BA\u8A8D\u4E2D\u3067\u3059"
  }, children));
}

/* ページ末尾の相談導線 */
function AskBlock({
  title,
  lead,
  label = '現場条件を伝えて相談する',
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "nk-band-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nk-wrap nk-reveal"
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "mist",
    elevated: false,
    bordered: true,
    padding: "var(--space-40)",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-32)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, lead)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('contact')
  }, label))));
}
Object.assign(window, {
  PageHead,
  DraftNotice,
  AskBlock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.FaqAccordion = __ds_scope.FaqAccordion;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SpecTable = __ds_scope.SpecTable;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StepFlow = __ds_scope.StepFlow;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.MediaPlaceholder = __ds_scope.MediaPlaceholder;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.CategoryTabs = __ds_scope.CategoryTabs;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.UtilityBar = __ds_scope.UtilityBar;

})();
