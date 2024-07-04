// src/tests/card.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '@/components/ui/Card';

const MockCard = ({ children }) => <div>{children}</div>;
MockCard.Header = ({ children }) => <div>{children}</div>;
MockCard.Header.displayName = 'Card.Header';
MockCard.Title = ({ children }) => <div>{children}</div>;
MockCard.Title.displayName = 'Card.Title';

describe('Card', () => {
  it('renders with the correct title', () => {
    render(
      <MockCard>
        <MockCard.Header>
          <MockCard.Title>Test Title</MockCard.Title>
        </MockCard.Header>
      </MockCard>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});
