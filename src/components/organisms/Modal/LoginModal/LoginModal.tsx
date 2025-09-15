import { useId, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import ReactLogo from "@/assets/images/react-logo.png";
import { APIEXECUTE } from "@/lib/api";
import { useNavigate } from "react-router-dom";

export default function SigninModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const id = useId();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await APIEXECUTE("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      console.log("Login success:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/main");
      }

      // close modal
      onOpenChange(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        {/* ... */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-2">
            <div
              className="flex size-11 shrink-0 items-center justify-center rounded-full border"
              aria-hidden="true"
            >
              <img
                src={ReactLogo}
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <DialogHeader>
              <DialogTitle
                className="sm:text-center "
                style={{ color: "#845BB3" }}
              >
                Welcome back
              </DialogTitle>
              <DialogDescription className="sm:text-center">
                Enter your credentials to login to your account.
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="space-y-4">
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-email`}>Email</Label>
              <Input
                id={`${id}-email`}
                placeholder="mangkanor@gmail.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-password`}>Password</Label>
              <Input
                id={`${id}-password`}
                placeholder="Enter your password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="flex items-center gap-2">
              <Checkbox id={`${id}-remember`} />
              <Label
                htmlFor={`${id}-remember`}
                className="text-muted-foreground font-normal"
              >
                Remember me
              </Label>
            </div>
            <a className="text-sm underline hover:no-underline" href="#">
              Forgot password?
            </a>
          </div>

          {/* change type to submit so it fires onSubmit */}
          <Button type="submit" className="w-full text-white">
            Sign in
          </Button>

          <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
            <span className="text-muted-foreground text-xs">Or</span>
          </div>
          <Button variant="outline" className="flex items-center space-x-2">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
              className="h-5 w-5"
            />
            <span>Login with Google</span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
