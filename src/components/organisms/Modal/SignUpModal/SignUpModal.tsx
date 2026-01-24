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
import ReactLogo from "@/assets/images/react-logo.png";
import { APIEXECUTE } from "@/lib/api";
import { useNavigate } from "react-router-dom";
import ClassicLoader from "@/components/atoms/Loader/Loader";
import { cn } from "@/lib/utils"; // optional helper if you have shadcn utils
import Turnstile from "react-turnstile";

// ✅ password strength checker
function checkPasswordStrength(password: string) {
  const minLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  const isValid = minLength && hasUpper && hasLower && hasNumber && hasSpecial;

  return {
    isValid,
    message: !password
      ? ""
      : !minLength
        ? "Password must be at least 8 characters long"
        : !hasUpper
          ? "Password must include an uppercase letter"
          : !hasLower
            ? "Password must include a lowercase letter"
            : !hasNumber
              ? "Password must include a number"
              : !hasSpecial
                ? "Password must include a special character"
                : "",
  };
}

export default function SignUpModal({
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
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setPasswordError("");

    if (!turnstileToken) {
      alert("Please verify you're not a bot first!");
      return;
    }

    const { isValid, message } = checkPasswordStrength(password);
    if (!isValid) {
      setPasswordError(message);
      return;
    }

    if (password !== passwordConfirm) {
      setPasswordError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const data = await APIEXECUTE("/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password, passwordConfirm }),
      });

      if (data.user) {
        navigate("/check-email");
        onOpenChange(false);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={loading ? "bg-transparent shadow-none border-none" : ""}
      >
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <ClassicLoader />
          </div>
        ) : (
          <>
            {/* Header */}
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
                  className="md:text-center"
                  style={{ color: "#845BB3" }}
                >
                  Sign up to Philippines Headlines
                </DialogTitle>
                <DialogDescription className="sm:text-center">
                  We just need a few details to get you started.
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="*:not-first:mt-2">
                  <Label htmlFor={`${id}-name`}>Name</Label>
                  <Input
                    id={`${id}-name`}
                    placeholder="Mang Kanor"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
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
                <div className="*:not-first:mt-2 relative">
                  <Label htmlFor={`${id}-password`}>Password</Label>
                  <Input
                    id={`${id}-password`}
                    placeholder="Enter your password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      const { message } = checkPasswordStrength(e.target.value);
                      setPasswordError(message);
                    }}
                  />
                  {passwordError && (
                    <div className="absolute left-0 top-full mt-1 text-xs bg-red-100 text-red-600 border border-red-300 rounded-md px-2 py-1 shadow">
                      {passwordError}
                    </div>
                  )}
                </div>
                <div className="*:not-first:mt-2">
                  <Label htmlFor={`${id}-confirm-password`}>
                    Confirm Password
                  </Label>
                  <Input
                    id={`${id}-confirm-password`}
                    placeholder="Confirm your password"
                    type="password"
                    required
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <Turnstile
                  sitekey="0x4AAAAAAB6_pu3nNfZo_bwH"
                  onVerify={(token) => setTurnstileToken(token)}
                />
              </div>
              <Button type="submit" className="w-full text-white">
                Sign up
              </Button>
            </form>
            <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
              <span className="text-muted-foreground text-xs">Or</span>
            </div>
            <Button
              variant="outline"
              className="flex items-center space-x-2"
              onClick={() => {
                window.location.href = `${API_URL}/auth/google/callback`;
              }}
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google logo"
                className="h-5 w-5"
              />
              <span>Sign up with Google</span>
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
