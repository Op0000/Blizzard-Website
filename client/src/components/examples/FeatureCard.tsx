import FeatureCard from '../FeatureCard'
import { Shield } from 'lucide-react'

export default function FeatureCardExample() {
  return (
    <FeatureCard 
      icon={Shield}
      title="AI Moderation"
      description="Advanced AI-powered moderation keeps your server safe with intelligent spam detection and automated rule enforcement."
    />
  )
}