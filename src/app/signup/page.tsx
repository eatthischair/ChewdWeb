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
  const { data, error } = await supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
  });
  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
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
              name="password"
              type="password"
              // autoComplete={
              //   mode === 'signin' ? 'current-password' : 'new-password'
              // }
              // defaultValue={state.password}
              required
              minLength={8}
              maxLength={100}
              className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>

          <Button className="w-full py-4 text-lg rounded-xl">Sign Up</Button>
        </CardContent>
      </Card>
    </div>
  );
}
