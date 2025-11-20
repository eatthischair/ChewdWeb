import React from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Label } from '../../components/ui/label';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="phone"
              placeholder="Enter your phone number bitch"
              className="p-4"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="p-4"
            />
          </div>

          <Button className="w-full py-4 text-lg rounded-xl">Sign In</Button>
        </CardContent>
      </Card>
    </div>
  );
}
