import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

const Earn = () => {
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const response = await fetch('/api/earn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, duration }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-lg font-bold">Earn</h2>
      <Card>
        <CardHeader>
          <CardTitle>Create Earn Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="amount">Amount</Label>
              <Input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="duration">Duration (days)</Label>
              <Input
                type="number"
                id="duration"
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <Button type="submit" variant="solid">
              Create Plan
            </Button>
          </form>
          {message && <p className="mt-4 text-green-500">{message}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default Earn;
