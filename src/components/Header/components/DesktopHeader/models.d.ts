import { Professional } from '@/api/methods/models';

export interface DesktopHeaderProps {
  onOpenLoginModal: () => void;
  professions: Professional[];
}
