import responsive from '../../assets/responsive-bar.svg';
import Button from '../Button/button.component';

interface ResponsiveBarProps {
  onClick: () => void;
}

const ResponsiveBar = ({ onClick }: ResponsiveBarProps) => {
  return (
    <Button variant="purple" onClick={onClick}>
      <img src={responsive} alt="barra-responsiva" />
    </Button>
  );
};

export default ResponsiveBar;
