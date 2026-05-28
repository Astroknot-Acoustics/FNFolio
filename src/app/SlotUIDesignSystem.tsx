import { useState } from "react";
import { motion } from "motion/react";
import {
  Layers,
  Layout,
  Grid3X3,
  Type,
  Box,
  Maximize2,
  Play,
  Smartphone,
  ChevronRight,
  Zap,
  Eye,
  Hand,
  Timer,
  AlertCircle,
  Sparkles,
  Palette,
} from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────────
interface SystemSection {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

// ─── Design Token Definitions ──────────────────────────────────────────────────
const SPACING_SCALE = [
  { token: "space-0", value: "0px", usage: "Reset / none" },
  { token: "space-1", value: "4px", usage: "Tight gaps, icon padding" },
  { token: "space-2", value: "8px", usage: "Inline spacing, small gaps" },
  { token: "space-3", value: "12px", usage: "Component internal padding" },
  { token: "space-4", value: "16px", usage: "Default gap, card padding" },
  { token: "space-5", value: "20px", usage: "Section spacing" },
  { token: "space-6", value: "24px", usage: "Large component padding" },
  { token: "space-8", value: "32px", usage: "Section margins" },
  { token: "space-10", value: "40px", usage: "Major section breaks" },
  { token: "space-12", value: "48px", usage: "Page-level spacing" },
];

const Z_INDEX_LAYERS = [
  { layer: "base", zIndex: 0, description: "Background, base game canvas" },
  { layer: "gameplay", zIndex: 10, description: "Reels, symbols, game elements" },
  { layer: "effects", zIndex: 20, description: "Particles, win lines, sparkles" },
  { layer: "hud", zIndex: 30, description: "Balance, bet, win displays" },
  { layer: "controls", zIndex: 40, description: "Spin button, control bar" },
  { layer: "notification", zIndex: 50, description: "Toasts, alerts, quick info" },
  { layer: "overlay", zIndex: 60, description: "Semi-transparent backgrounds" },
  { layer: "modal", zIndex: 70, description: "Dialogs, reward popups" },
  { layer: "critical", zIndex: 80, description: "Error states, loading screens" },
  { layer: "system", zIndex: 90, description: "System UI, debug overlays" },
];

const BUTTON_VARIANTS = [
  { variant: "primary", usage: "Main actions (Spin, Confirm)", priority: 1 },
  { variant: "secondary", usage: "Secondary actions (Bet adjust, Menu)", priority: 2 },
  { variant: "tertiary", usage: "Low-priority actions (Info, Settings)", priority: 3 },
  { variant: "ghost", usage: "Inline actions, navigation", priority: 4 },
  { variant: "destructive", usage: "Dangerous actions (Exit, Cancel)", priority: 5 },
];

const ANIMATION_CATEGORIES = [
  { category: "idle", intensity: "low", duration: "2-4s", description: "Ambient loops, breathing effects" },
  { category: "interaction", intensity: "medium", duration: "150-300ms", description: "Button press, hover states" },
  { category: "win", intensity: "high", duration: "1-3s", description: "Win celebrations, coin showers" },
  { category: "reward", intensity: "high", duration: "2-5s", description: "Big win, jackpot sequences" },
  { category: "transition", intensity: "medium", duration: "300-500ms", description: "Screen changes, modal entry" },
];

// ─── Component: Section Card ───────────────────────────────────────────────────
function SectionCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-card border border-border rounded-lg overflow-hidden"
    >
      <div className="px-6 py-4 border-b border-border flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
          <Icon size={16} className="text-accent" />
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </motion.div>
  );
}

// ─── Component: Token Table ────────────────────────────────────────────────────
function TokenTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | number | React.ReactNode)[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            {headers.map((header, i) => (
              <th
                key={i}
                className="text-left py-2 px-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/50 last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="py-2.5 px-3 text-foreground/90">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Component: Rule Block ─────────────────────────────────────────────────────
function RuleBlock({ rules }: { rules: string[] }) {
  return (
    <ul className="space-y-2">
      {rules.map((rule, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
          <ChevronRight size={14} className="text-accent mt-0.5 shrink-0" />
          <span>{rule}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── Component: Visual Demo ────────────────────────────────────────────────────
function ScreenZoneDemo() {
  return (
    <div className="bg-secondary/50 rounded-lg p-4 border border-border">
      <div className="aspect-[9/16] max-w-[200px] mx-auto bg-background rounded-lg border border-border overflow-hidden relative">
        {/* HUD Zone */}
        <div className="absolute top-0 left-0 right-0 h-[15%] bg-accent/10 border-b border-accent/30 flex items-center justify-center">
          <span className="text-[9px] font-mono text-accent uppercase tracking-wider">HUD Zone</span>
        </div>
        
        {/* Gameplay Zone */}
        <div className="absolute top-[15%] left-0 right-0 h-[55%] bg-chart-2/10 border-b border-chart-2/30 flex items-center justify-center">
          <span className="text-[9px] font-mono text-chart-2 uppercase tracking-wider">Gameplay Zone</span>
        </div>
        
        {/* Controls Zone */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-chart-1/10 flex items-center justify-center">
          <span className="text-[9px] font-mono text-chart-1 uppercase tracking-wider">Controls Zone</span>
        </div>
        
        {/* Safe Area Indicators */}
        <div className="absolute top-2 left-2 right-2 bottom-2 border border-dashed border-muted-foreground/30 rounded pointer-events-none" />
      </div>
      <p className="text-center text-[10px] text-muted-foreground mt-3 font-mono uppercase tracking-wider">
        Mobile Portrait Layout
      </p>
    </div>
  );
}

function ThumbZoneDemo() {
  return (
    <div className="bg-secondary/50 rounded-lg p-4 border border-border">
      <div className="aspect-[9/16] max-w-[200px] mx-auto bg-background rounded-lg border border-border overflow-hidden relative">
        {/* Hard to reach zone */}
        <div className="absolute top-0 left-0 right-0 h-[30%] bg-destructive/10 flex items-center justify-center">
          <span className="text-[9px] font-mono text-destructive uppercase tracking-wider">Hard Reach</span>
        </div>
        
        {/* Natural zone */}
        <div className="absolute top-[30%] left-0 right-0 h-[40%] bg-chart-3/10 flex items-center justify-center">
          <span className="text-[9px] font-mono text-chart-3 uppercase tracking-wider">Natural</span>
        </div>
        
        {/* Easy reach / thumb zone */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-chart-2/10 flex items-center justify-center">
          <span className="text-[9px] font-mono text-chart-2 uppercase tracking-wider">Easy Reach</span>
        </div>
        
        {/* Thumb arc overlay */}
        <div 
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[50%] border-2 border-dashed border-accent/40 rounded-full pointer-events-none"
          style={{ transform: "rotate(-30deg)" }}
        />
      </div>
      <p className="text-center text-[10px] text-muted-foreground mt-3 font-mono uppercase tracking-wider">
        Thumb Ergonomics
      </p>
    </div>
  );
}

function SpinButtonStates() {
  const states = [
    { name: "Idle", color: "bg-accent", desc: "Ready to spin" },
    { name: "Active", color: "bg-chart-2", desc: "Spinning" },
    { name: "Win", color: "bg-chart-3", desc: "Win state" },
    { name: "Turbo", color: "bg-chart-1", desc: "Fast mode" },
    { name: "Disabled", color: "bg-muted", desc: "Not available" },
  ];
  
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {states.map((state) => (
        <div key={state.name} className="flex flex-col items-center gap-2">
          <div className={`w-14 h-14 rounded-full ${state.color} flex items-center justify-center shadow-lg`}>
            <Play size={20} className="text-background ml-0.5" fill="currentColor" />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
            {state.name}
          </span>
        </div>
      ))}
    </div>
  );
}

function ControlBarDemo() {
  return (
    <div className="bg-secondary/50 rounded-lg p-4 border border-border">
      <div className="bg-background rounded-lg border border-border p-3">
        <div className="flex items-center justify-between gap-2">
          {/* Left controls - Low priority */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
              <span className="text-[8px] font-mono text-muted-foreground">MENU</span>
            </div>
          </div>
          
          {/* Center controls */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <span className="text-[8px] font-mono text-muted-foreground mb-1">BET</span>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 rounded bg-secondary flex items-center justify-center text-[10px]">−</div>
                <div className="w-12 h-6 rounded bg-secondary flex items-center justify-center text-[10px] font-mono">1.00</div>
                <div className="w-6 h-6 rounded bg-secondary flex items-center justify-center text-[10px]">+</div>
              </div>
            </div>
            
            {/* Spin button - Highest priority */}
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg">
              <Play size={24} className="text-accent-foreground ml-1" fill="currentColor" />
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-[8px] font-mono text-muted-foreground mb-1">AUTO</span>
              <div className="w-12 h-6 rounded bg-secondary flex items-center justify-center text-[10px] font-mono">OFF</div>
            </div>
          </div>
          
          {/* Right controls - Low priority */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
              <span className="text-[8px] font-mono text-muted-foreground">INFO</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-[10px] text-muted-foreground mt-3 font-mono uppercase tracking-wider">
        Control Bar Hierarchy
      </p>
    </div>
  );
}

function TypographyScale() {
  const scale = [
    { name: "display-lg", size: "48px", weight: 700, usage: "Jackpot amounts" },
    { name: "display", size: "36px", weight: 700, usage: "Big win values" },
    { name: "heading-lg", size: "24px", weight: 600, usage: "Modal titles" },
    { name: "heading", size: "20px", weight: 600, usage: "Section headers" },
    { name: "body-lg", size: "16px", weight: 400, usage: "Balance display" },
    { name: "body", size: "14px", weight: 400, usage: "General text" },
    { name: "caption", size: "12px", weight: 500, usage: "Labels, hints" },
    { name: "micro", size: "10px", weight: 500, usage: "Legal, timestamps" },
  ];
  
  return (
    <div className="space-y-3">
      {scale.map((item) => (
        <div key={item.name} className="flex items-baseline gap-4 border-b border-border/50 pb-2">
          <span 
            className="text-foreground min-w-[120px]"
            style={{ fontSize: item.size, fontWeight: item.weight, lineHeight: 1.2 }}
          >
            Aa
          </span>
          <div className="flex-1">
            <span className="font-mono text-[10px] text-accent">{item.name}</span>
            <span className="text-muted-foreground text-xs ml-2">
              {item.size} / {item.weight}
            </span>
            <p className="text-[11px] text-muted-foreground mt-0.5">{item.usage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ModalDemo() {
  return (
    <div className="bg-secondary/50 rounded-lg p-4 border border-border">
      <div className="relative aspect-[9/16] max-w-[200px] mx-auto bg-background rounded-lg border border-border overflow-hidden">
        {/* Background dimmed */}
        <div className="absolute inset-0 bg-background/80" />
        
        {/* Modal */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] bg-card rounded-lg border border-border shadow-xl">
          <div className="p-3 border-b border-border">
            <div className="h-2 w-16 bg-muted rounded mx-auto" />
          </div>
          <div className="p-4">
            <div className="h-12 bg-accent/20 rounded mb-3 flex items-center justify-center">
              <Sparkles size={16} className="text-accent" />
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-full bg-muted rounded" />
              <div className="h-2 w-3/4 bg-muted rounded" />
            </div>
          </div>
          <div className="p-3 border-t border-border flex gap-2">
            <div className="flex-1 h-8 bg-secondary rounded" />
            <div className="flex-1 h-8 bg-accent rounded" />
          </div>
        </div>
      </div>
      <p className="text-center text-[10px] text-muted-foreground mt-3 font-mono uppercase tracking-wider">
        Modal Layer Stack
      </p>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function SlotUIDesignSystem() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections: SystemSection[] = [
    {
      id: "layout",
      title: "Layout Architecture",
      icon: Layout,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <ScreenZoneDemo />
            <ThumbZoneDemo />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Screen Zoning Rules</h4>
            <RuleBlock
              rules={[
                "HUD Zone (top 15%): Persistent info only — balance, bet, win. Never place interactive elements here.",
                "Gameplay Zone (middle 55%): Reserved for reels/game canvas. UI elements should not overlap this area.",
                "Controls Zone (bottom 30%): All primary interactions. Optimized for thumb reach.",
                "Safe areas: Maintain 16px minimum inset from screen edges for notch/rounded corner devices.",
                "Portrait-first: Design for 9:16 aspect ratio, then adapt for landscape as secondary.",
              ]}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Thumb Zone Optimization</h4>
            <RuleBlock
              rules={[
                "Primary actions (Spin) must be in the bottom 30% of the screen.",
                "Secondary actions (Bet, Auto) within natural thumb arc (bottom 40%).",
                "Tertiary actions (Menu, Info) can be in corners or top zone.",
                "Minimum touch target: 44×44px for all interactive elements.",
                "Spacing between touch targets: minimum 8px gap to prevent mis-taps.",
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      id: "hud",
      title: "Gameplay HUD System",
      icon: Eye,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Information Hierarchy</h4>
            <TokenTable
              headers={["Priority", "Element", "Visibility", "Update Frequency"]}
              rows={[
                ["1", "Win Amount", "During/after spin", "Per spin result"],
                ["2", "Balance", "Always visible", "Per transaction"],
                ["3", "Bet Amount", "Always visible", "User-initiated"],
                ["4", "Multiplier", "When active", "Per feature trigger"],
                ["5", "Free Spins Count", "During feature", "Per spin"],
                ["6", "Jackpot Ticker", "Optional", "Real-time"],
              ]}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">HUD Behavior Rules</h4>
            <RuleBlock
              rules={[
                "Persistent elements: Balance & Bet must never be obscured during normal gameplay.",
                "Temporary elements: Win displays can overlay gameplay briefly (2-4s max).",
                "Attention capture: Only win amounts may use animation to draw focus.",
                "Number formatting: Use locale-aware formatting, always show currency symbol.",
                "Contrast ratio: Minimum 4.5:1 against any background state (including effects).",
              ]}
            />
          </div>
          
          <div className="bg-secondary/50 rounded-lg p-4 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="text-left">
                <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">Balance</span>
                <span className="text-lg font-semibold text-foreground font-mono">$1,234.56</span>
              </div>
              <div className="text-center">
                <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">Win</span>
                <span className="text-2xl font-bold text-chart-2 font-mono">$50.00</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">Bet</span>
                <span className="text-lg font-semibold text-foreground font-mono">$1.00</span>
              </div>
            </div>
            <p className="text-center text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
              HUD Information Hierarchy Demo
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "controls",
      title: "Bottom Control Bar",
      icon: Hand,
      content: (
        <div className="space-y-6">
          <ControlBarDemo />
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Control Hierarchy</h4>
            <TokenTable
              headers={["Priority", "Control", "Position", "Size"]}
              rows={[
                ["1 (Highest)", "Spin Button", "Center", "64-80px diameter"],
                ["2", "Bet Controls", "Adjacent to Spin", "Standard (44px)"],
                ["3", "Autoplay", "Adjacent to Spin", "Standard (44px)"],
                ["4", "Menu/Settings", "Far left/right", "Compact (40px)"],
                ["5", "Info/Paytable", "Far left/right", "Compact (40px)"],
              ]}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Interaction Rules</h4>
            <RuleBlock
              rules={[
                "Spin button is always the largest, most prominent interactive element.",
                "Control bar height: 80-100px to accommodate thumb reach and visual hierarchy.",
                "During spin: Disable bet controls, convert Spin to Stop if supported.",
                "Autoplay active: Visual indicator on button, quick-access stop mechanism.",
                "Gesture support: Consider swipe-up for quick bet adjustment panels.",
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      id: "spin",
      title: "Spin Button System",
      icon: Play,
      content: (
        <div className="space-y-6">
          <SpinButtonStates />
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Sizing Logic</h4>
            <TokenTable
              headers={["Context", "Size", "Ratio to Screen"]}
              rows={[
                ["Mobile Portrait", "64-72px", "~18% of screen width"],
                ["Mobile Landscape", "56-64px", "~12% of screen width"],
                ["Tablet Portrait", "72-80px", "~12% of screen width"],
                ["Tablet Landscape", "64-72px", "~8% of screen width"],
              ]}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">State Definitions</h4>
            <RuleBlock
              rules={[
                "Idle: Default state, highest visual prominence, inviting interaction.",
                "Active/Spinning: Reduced prominence, may show stop icon, subtle pulse animation.",
                "Win: Celebratory state, can flash or pulse with win colors briefly.",
                "Turbo/Fast: Visual indicator (lightning icon, color shift) showing speed mode.",
                "Disabled: Greyed out when balance insufficient or during restricted states.",
              ]}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Visual Priority Rules</h4>
            <RuleBlock
              rules={[
                "Must have highest contrast ratio of all control elements.",
                "Should use brand accent color or high-saturation color for visibility.",
                "Shadow/glow effects permitted to elevate above other controls.",
                "Icon should be centered, slightly offset right to imply 'play' motion.",
                "Touch feedback: Immediate scale reduction (95%) on press, spring back on release.",
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      id: "typography",
      title: "Typography System",
      icon: Type,
      content: (
        <div className="space-y-6">
          <TypographyScale />
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Numeric Typography Rules</h4>
            <RuleBlock
              rules={[
                "Win amounts: Use display sizes (36-48px), tabular numerals, high contrast.",
                "Balance/Bet: Body-lg (16px), always visible, tabular numerals for alignment.",
                "Multipliers: Heading size (20-24px), can use stylized/condensed fonts.",
                "Countdown timers: Mono/tabular, medium weight, high legibility.",
                "Always use tabular numerals (font-variant-numeric: tabular-nums) for changing values.",
              ]}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Readability Under Effects</h4>
            <RuleBlock
              rules={[
                "Text over gameplay: Require solid or semi-opaque background container.",
                "Minimum contrast: 4.5:1 for body text, 3:1 for large text (24px+).",
                "Animation restriction: Body text should not animate (position shifts only).",
                "Number animations: Counter animations allowed, ease-out timing preferred.",
                "Glow effects: Reserved for win amounts only, should not reduce legibility.",
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      id: "spacing",
      title: "Spacing + Grid System",
      icon: Grid3X3,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Base Spacing Scale (4px unit)</h4>
            <TokenTable
              headers={["Token", "Value", "Usage"]}
              rows={SPACING_SCALE.map((s) => [
                <code key={s.token} className="text-accent text-xs">{s.token}</code>,
                s.value,
                s.usage,
              ])}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Grid Rules</h4>
            <RuleBlock
              rules={[
                "Base unit: 4px — all spacing values must be multiples of 4.",
                "Touch targets: 44px minimum (11 × base unit).",
                "Control gaps: 8px minimum between interactive elements.",
                "Section padding: 16-24px for container edges.",
                "Modal padding: 24px internal, 16px from screen edges.",
              ]}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Responsive Scaling</h4>
            <TokenTable
              headers={["Breakpoint", "Scale Factor", "Base Font"]}
              rows={[
                ["< 360px (Small phone)", "0.875×", "14px"],
                ["360-414px (Phone)", "1×", "16px"],
                ["414-768px (Large phone)", "1.125×", "16px"],
                ["768px+ (Tablet)", "1.25×", "18px"],
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      id: "components",
      title: "Component System",
      icon: Box,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Button Variants</h4>
            <TokenTable
              headers={["Variant", "Usage", "Priority"]}
              rows={BUTTON_VARIANTS.map((b) => [b.variant, b.usage, b.priority])}
            />
          </div>
          
          <div className="flex flex-wrap gap-3 p-4 bg-secondary/50 rounded-lg border border-border">
            <button className="px-4 py-2 bg-accent text-accent-foreground rounded font-medium text-sm">
              Primary
            </button>
            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded font-medium text-sm border border-border">
              Secondary
            </button>
            <button className="px-4 py-2 bg-transparent text-foreground rounded font-medium text-sm border border-border">
              Tertiary
            </button>
            <button className="px-4 py-2 bg-transparent text-muted-foreground rounded font-medium text-sm hover:bg-secondary">
              Ghost
            </button>
            <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded font-medium text-sm">
              Destructive
            </button>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Component Categories</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                <h5 className="font-medium text-sm mb-2 text-foreground">HUD Panels</h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Balance display container</li>
                  <li>• Win amount panel</li>
                  <li>• Bet level indicator</li>
                  <li>• Multiplier badge</li>
                </ul>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                <h5 className="font-medium text-sm mb-2 text-foreground">Overlays</h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Loading screen</li>
                  <li>• Connection lost</li>
                  <li>• Session timeout</li>
                  <li>• Age verification</li>
                </ul>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                <h5 className="font-medium text-sm mb-2 text-foreground">Notifications</h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Toast messages</li>
                  <li>• Feature triggers</li>
                  <li>• Balance updates</li>
                  <li>• System alerts</li>
                </ul>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                <h5 className="font-medium text-sm mb-2 text-foreground">Interactive</h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Bet selector</li>
                  <li>• Autoplay config</li>
                  <li>• Settings panel</li>
                  <li>• Paytable viewer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "modals",
      title: "Modal + Overlay System",
      icon: Maximize2,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <ModalDemo />
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">Modal Types</h4>
              <TokenTable
                headers={["Type", "Dismissal", "Z-Index"]}
                rows={[
                  ["Info Modal", "Tap anywhere / X", "70"],
                  ["Reward Popup", "CTA only", "75"],
                  ["Settings Sheet", "Swipe down / X", "70"],
                  ["Error Dialog", "CTA only", "80"],
                  ["System Alert", "None (auto)", "85"],
                ]}
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Modal Behavior Rules</h4>
            <RuleBlock
              rules={[
                "Backdrop: Semi-transparent (60-80% opacity), blur optional for premium feel.",
                "Entry animation: Scale from 0.95 + fade, 300ms duration, ease-out.",
                "Exit animation: Scale to 0.98 + fade, 200ms duration, ease-in.",
                "Reward modals: Must have explicit dismiss action, no tap-to-close.",
                "Stacking: Only one modal visible at a time, queue subsequent modals.",
              ]}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Reward Popup Rules</h4>
            <RuleBlock
              rules={[
                "Big Win (10x+): Full-screen takeover, particle effects, 3-5s duration.",
                "Mega Win (25x+): Extended celebration, sound design cue, 5-7s duration.",
                "Epic Win (50x+): Maximum celebration, persistent until user dismisses.",
                "All reward popups must show: Win amount, multiplier, optional share CTA.",
                "Skip option: Always provide accelerate/skip for returning players.",
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      id: "zindex",
      title: "Layering / Z-Index System",
      icon: Layers,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Layer Stack</h4>
            <div className="space-y-2">
              {Z_INDEX_LAYERS.slice().reverse().map((layer, i) => (
                <div
                  key={layer.layer}
                  className="flex items-center gap-4 p-3 rounded-lg border border-border"
                  style={{
                    background: `rgba(var(--accent), ${0.05 + i * 0.03})`,
                    marginLeft: `${i * 8}px`,
                  }}
                >
                  <code className="text-accent text-xs w-16">{layer.zIndex}</code>
                  <span className="font-medium text-sm text-foreground w-24">{layer.layer}</span>
                  <span className="text-xs text-muted-foreground">{layer.description}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Stacking Rules</h4>
            <RuleBlock
              rules={[
                "Never skip z-index levels — maintain consistent stacking order.",
                "Effects layer must never overlap HUD elements (readability).",
                "Controls must always be above effects during normal gameplay.",
                "Modals create a new stacking context, reset internal z-index.",
                "Critical overlays (errors, loading) always on top of modals.",
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      id: "animation",
      title: "Animation System",
      icon: Zap,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Animation Categories</h4>
            <TokenTable
              headers={["Category", "Intensity", "Duration", "Description"]}
              rows={ANIMATION_CATEGORIES.map((a) => [a.category, a.intensity, a.duration, a.description])}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Motion Guidelines</h4>
            <RuleBlock
              rules={[
                "Idle animations: Subtle, non-distracting, pausable. Max 5% of screen area.",
                "Interaction feedback: Immediate (< 100ms), proportional to action importance.",
                "Win celebrations: Can be intense but must not exceed 5 seconds without skip.",
                "Reduced motion: Respect prefers-reduced-motion, provide static alternatives.",
                "Performance: Target 60fps, use GPU-accelerated properties (transform, opacity).",
              ]}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Easing Presets</h4>
            <TokenTable
              headers={["Name", "Curve", "Usage"]}
              rows={[
                ["ease-out", "cubic-bezier(0.25, 0.46, 0.45, 0.94)", "Entrances, reveals"],
                ["ease-in", "cubic-bezier(0.55, 0.06, 0.68, 0.19)", "Exits, dismissals"],
                ["ease-in-out", "cubic-bezier(0.65, 0, 0.35, 1)", "State changes"],
                ["spring", "cubic-bezier(0.34, 1.56, 0.64, 1)", "Playful interactions"],
                ["linear", "linear", "Progress bars, counters"],
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      id: "responsive",
      title: "Responsive Behavior",
      icon: Smartphone,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Breakpoint System</h4>
            <TokenTable
              headers={["Breakpoint", "Width", "Target Devices"]}
              rows={[
                ["xs", "< 360px", "Small phones, older devices"],
                ["sm", "360-414px", "Standard phones"],
                ["md", "414-768px", "Large phones, phablets"],
                ["lg", "768-1024px", "Tablets portrait"],
                ["xl", "1024px+", "Tablets landscape, desktop"],
              ]}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Adaptive Rules</h4>
            <RuleBlock
              rules={[
                "Mobile-first: Design for smallest viewport (360px), scale up.",
                "Touch targets: Scale with viewport but never below 44px minimum.",
                "Typography: Scale 0.875× for xs, 1× for sm/md, 1.125× for lg/xl.",
                "Spacing: Compress by 0.75× for xs viewport, maintain ratios.",
                "Control bar: Fixed height on mobile, can expand on tablet.",
              ]}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Orientation Handling</h4>
            <RuleBlock
              rules={[
                "Portrait (9:16): Primary design target, full control bar visible.",
                "Landscape (16:9): HUD compresses to sides, gameplay expands.",
                "Landscape controls: Vertical strip on right side, or floating spin button.",
                "Orientation lock: Recommend portrait-lock for consistent experience.",
                "Safe areas: Account for notch/dynamic island in both orientations.",
              ]}
            />
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 p-4 bg-secondary/50 rounded-lg border border-border">
            <div className="aspect-[9/16] bg-background rounded border border-border flex items-center justify-center">
              <span className="text-[10px] font-mono text-muted-foreground">Portrait</span>
            </div>
            <div className="aspect-[16/9] bg-background rounded border border-border flex items-center justify-center">
              <span className="text-[10px] font-mono text-muted-foreground">Landscape</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const navItems = [
    { id: "layout", icon: Layout, label: "Layout" },
    { id: "hud", icon: Eye, label: "HUD" },
    { id: "controls", icon: Hand, label: "Controls" },
    { id: "spin", icon: Play, label: "Spin" },
    { id: "typography", icon: Type, label: "Type" },
    { id: "spacing", icon: Grid3X3, label: "Grid" },
    { id: "components", icon: Box, label: "Components" },
    { id: "modals", icon: Maximize2, label: "Modals" },
    { id: "zindex", icon: Layers, label: "Layers" },
    { id: "animation", icon: Zap, label: "Motion" },
    { id: "responsive", icon: Smartphone, label: "Responsive" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Palette size={16} className="text-accent" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  UI Architecture
                </span>
              </div>
              <h1 className="text-xl font-bold text-foreground">
                Slot Game Design System
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
              <span className="px-2 py-1 rounded bg-secondary">Mobile-First</span>
              <span className="px-2 py-1 rounded bg-secondary">Theme-Agnostic</span>
              <span className="px-2 py-1 rounded bg-secondary">White-Label</span>
            </div>
          </div>
        </div>
        
        {/* Quick nav */}
        <div className="border-t border-border overflow-x-auto">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center gap-1 py-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs transition-colors whitespace-nowrap ${
                    activeSection === item.id
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon size={12} />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Reusable UI Foundation for Scalable Slot Games
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A comprehensive, theme-agnostic design system defining structure, hierarchy, 
              and behavior rules for mobile-first slot game interfaces. Built for high visual 
              noise environments and fast gameplay loops.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlertCircle size={14} className="text-chart-3" />
                <span>Not a themed UI — architecture only</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Timer size={14} className="text-chart-2" />
                <span>Optimized for fast spin cycles</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-8 px-4 bg-secondary/30 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
            Core Principles
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Theme-Agnostic", desc: "Separates structure from visual style for easy skinning" },
              { title: "High-Noise Tolerant", desc: "UI remains readable under heavy visual effects" },
              { title: "Fast Loop Optimized", desc: "Minimizes friction for rapid spin cycles" },
              { title: "Developer Friendly", desc: "Clear token system for implementation" },
            ].map((principle) => (
              <div key={principle.title} className="p-4 bg-card rounded-lg border border-border">
                <h4 className="font-medium text-sm text-foreground mb-1">{principle.title}</h4>
                <p className="text-xs text-muted-foreground">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <SectionCard title={section.title} icon={section.icon}>
                {section.content}
              </SectionCard>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs text-muted-foreground">
            Slot Game UI Design System — White-Label Architecture Documentation
          </p>
          <p className="text-[10px] text-muted-foreground mt-1">
            This system defines structure and behavior only. Apply theme layers separately.
          </p>
        </div>
      </footer>
    </div>
  );
}
