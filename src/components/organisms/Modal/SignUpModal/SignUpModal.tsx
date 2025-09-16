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
import ClassicLoader from "@/components/atoms/Loader/Loader"; // ✅ import loader

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await APIEXECUTE("/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password, passwordConfirm }),
      });

      console.log("Register success:", data);

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
          // ✅ show loader while waiting for response
          <div className="flex justify-center items-center py-10">
            <ClassicLoader />
          </div>
        ) : (
          <>
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
              <Button type="submit" className="w-full text-white">
                Sign up
              </Button>
            </form>

            <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
              <span className="text-muted-foreground text-xs">Or</span>
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google logo"
                className="h-5 w-5"
              />
              <span>Continue with Google</span>
            </Button>

            <p className="text-muted-foreground text-center text-xs">
              By signing up you agree to our{" "}
              <a className="underline hover:no-underline" href="#">
                Terms
              </a>
              .
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
