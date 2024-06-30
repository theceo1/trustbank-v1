import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '@/components/ui/card';

describe('Card', () => {
  it('renders with the correct title', () => {
    render(
      <Card>
        <Card.Header>
          <Card.Title>Test Title</Card.Title>
        </Card.Header>
      </Card>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});
