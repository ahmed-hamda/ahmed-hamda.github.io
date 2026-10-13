import { BrainCircuit, Code2, Database } from 'lucide-react'

export default function EngineeringVisual() {
  return (
    <div className="engineering-visual" aria-hidden="true">
      <div className="engineering-grid" />
      <div className="engineering-orbit orbit-outer" />
      <div className="engineering-orbit orbit-inner" />
      <svg className="engineering-connections" viewBox="0 0 480 520" fill="none">
        <path className="circuit-track" d="M240 260V112H348M240 260H105V368M240 260H375V355M240 260V425H180" />
        <path className="circuit-signal" d="M240 260V112H348M240 260H105V368M240 260H375V355" />
        <g className="circuit-points"><circle cx="348" cy="112" r="4" /><circle cx="105" cy="368" r="4" /><circle cx="375" cy="355" r="4" /><circle cx="180" cy="425" r="4" /></g>
      </svg>
      <div className="engineering-core"><BrainCircuit size={58} strokeWidth={1.2} /></div>
      <div className="engineering-node node-code"><Code2 size={30} strokeWidth={1.4} /></div>
      <div className="engineering-node node-data"><Database size={30} strokeWidth={1.4} /></div>
      <div className="engineering-node node-ai"><BrainCircuit size={30} strokeWidth={1.4} /></div>
      <div className="engineering-bars">{Array.from({ length: 18 }, (_, index) => <span key={index} style={{ height: `${14 + ((index * 17) % 45)}px`, animationDelay: `${index * 0.12}s` }} />)}</div>
      <span className="engineering-cross cross-top">+</span>
      <span className="engineering-cross cross-bottom">+</span>
    </div>
  )
}
