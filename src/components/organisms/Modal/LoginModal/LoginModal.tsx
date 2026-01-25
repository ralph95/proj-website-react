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
import ClassicLoader from "@/components/atoms/Loader/Loader";
import Turnstile from "react-turnstile";

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
  const [turnstileToken, setTurnstileToken] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!turnstileToken) {
      alert("Please verify you're not a bot first!");
      return;
    }

    try {
      const data = await APIEXECUTE("/login", {
        method: "POST",
        body: JSON.stringify({ email, password, rememberMe }),
      });

      console.log("Login success:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/main");
      }

      onOpenChange(false); // ✅ close modal only once
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={
          loading
            ? "p-0 bg-transparent shadow-none border-none outline-none ring-0"
            : "sm:max-w-[425px]"
        }
      >
        {loading ? (
          // ✅ show loader while waiting for server
          <div className="flex justify-center items-center py-10">
            <ClassicLoader />
          </div>
        ) : (
          <>
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
                    className="sm:text-center"
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
                  <Checkbox
                    id={`${id}-remember`}
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked === true)
                    }
                  />
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
              <div className="flex justify-center mb-3">
                <Turnstile
                  sitekey="0x4AAAAAAB6_pu3nNfZo_bwH"
                  onVerify={(token) => setTurnstileToken(token)}
                />
              </div>

              <Button type="submit" className="w-full text-white">
                Sign in
              </Button>
            </form>

            <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
              <span className="text-muted-foreground text-xs">Or</span>
            </div>
            <Button
              variant="outline"
              className="flex items-center space-x-2"
              onClick={() => {
                window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
              }}
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google logo"
                className="h-5 w-5"
              />
              <span>Login with Google</span>
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
