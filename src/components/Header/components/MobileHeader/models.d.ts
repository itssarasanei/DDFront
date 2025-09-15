import { Professional } from '@/api/methods/models';

export interface MobileHeaderProps {
  onOpenLoginModal: () => void;
  professions: Professional[];
}
