import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '@/components/ui/button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies the correct variant class', () => {
    const { container } = render(<Button variant="outline">Click me</Button>);
    expect(container.firstChild).toHaveClass('btn-outline');
  });
});
