
import { useState } from "react"
import Button from "./ui/Button"
import Input  from "./ui/Input"
import Label  from "./ui/Label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Card className="w-full max-w-md">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login" onClick={() => setIsLogin(true)}>
            Login
          </TabsTrigger>
          <TabsTrigger value="register" onClick={() => setIsLogin(false)}>
            Register
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <CardHeader>
            <CardTitle>Login to QuickHelp</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="remember" className="text-sm font-normal">
                Remember me
              </Label>
              <div className="flex-1 text-right">
                <Button variant="link" className="px-0 text-sm">
                  Forgot password?
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Login</Button>
          </CardFooter>
        </TabsContent>
        <TabsContent value="register">
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Sign up to access medical help and consultations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-register">Email</Label>
              <Input id="email-register" type="email" placeholder="your.email@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" placeholder="+1234567890" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-register">Password</Label>
              <div className="relative">
                <Input id="password-register" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="terms" className="text-sm font-normal">
                I agree to the{" "}
                <Button variant="link" className="h-auto p-0 text-sm">
                  terms of service
                </Button>{" "}
                and{" "}
                <Button variant="link" className="h-auto p-0 text-sm">
                  privacy policy
                </Button>
              </Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create Account</Button>
          </CardFooter>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

