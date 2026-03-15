import { useState } from "react";
import Center from "../../components/layout/center";
import Container from "../../components/layout/container";
import Stack from "../../components/layout/stack";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Field, FieldGroup } from "../../components/ui/field";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useUserStore } from "../../store/useUserStore";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, loading, error } = useUserStore();

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    await signup(email, password);
  }

  return (
    <Container>
      <Center>
        <Card className="max-w-sm w-full">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Enter your details to continue</CardDescription>
            <CardDescription>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Field>
                <FieldGroup>
                  <Stack>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Stack>
                  <Stack>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Stack>
                </FieldGroup>
                <FieldGroup>
                  <Button type="submit" className="w-full">
                    {loading ? "Creating..." : "Sign Up"}
                  </Button>
                </FieldGroup>
              </Field>
            </form>
          </CardContent>
        </Card>
      </Center>
    </Container>
  );
}

export default Register;
