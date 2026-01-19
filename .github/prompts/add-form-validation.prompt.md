---
name: add-form-validation
description: Adds comprehensive form validation to React Router forms using Zod schema validation, proper error handling, and accessible error messages
agent: edit
---

# Add Form Validation

Add robust form validation to a React Router form with Zod schema validation, error handling, and accessible error display.

## Current Selection

${selection}

## Instructions

1.  **Install dependencies** (if not already installed):

    ```bash
    npm install zod
    ```

2.  **Create Zod validation schema**:

    ```typescript
    import { z } from "zod";

    const formSchema = z.object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(8, "Password must be at least 8 characters"),
      name: z.string().min(2, "Name must be at least 2 characters"),
    });

    type FormData = z.infer<typeof formSchema>;
    ```

3.  **Update action function** with validation:

    ```typescript
    export async function action({ request }: Route.ActionArgs) {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);

      // Validate with Zod
      const result = formSchema.safeParse(data);

      if (!result.success) {
        return {
          errors: result.error.flatten().fieldErrors,
          values: data,
        };
      }

      // Process valid data
      await saveData(result.data);
      return redirect("/success");
    }
    ```

4.  **Update component** to display errors:

    ```typescript
    import { useActionData } from "react-router";

    export default function Component() {
    const actionData = useActionData<typeof action>();

    return (
    <Form method="post" className="space-y-6">
    <div>
    <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
    Email
    </label>
    <input
    type="email"
    id="email"
    name="email"
    defaultValue={actionData?.values?.email}
    aria-invalid={actionData?.errors?.email ? "true" : "false"}
    aria-describedby={actionData?.errors?.email ? "email-error" : undefined}
    className={\`
    mt-1 block w-full px-3 py-2 rounded-lg
    border \${actionData?.errors?.email
    ? 'border-red-500 dark:border-red-400'
    : 'border-gray-300 dark:border-gray-600'
    }
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-white
    focus:ring-2 focus:ring-blue-500
    \`}
    />
    {actionData?.errors?.email && (
    <p
                id="email-error"
                className="mt-1 text-sm text-red-600 dark:text-red-400"
                role="alert"
              >
    {actionData.errors.email[0]}
    </p>
    )}
    </div>

          <button
            type="submit"
            className="
              w-full px-4 py-2 rounded-lg font-semibold
              bg-blue-600 hover:bg-blue-700
              text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500
              disabled:opacity-50
              dark:bg-blue-500 dark:hover:bg-blue-600
            "
          >
            Submit
          </button>
        </Form>

    );
    }
    ```

5.  **Add loading state** with useNavigation:

    ```typescript
    import { useNavigation } from "react-router";

    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    <button disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>;
    ```

## Validation Patterns

### Common Zod validators:

```typescript
z.string().email() // Email
z.string().url() // URL
z.string().min(8) // Min length
z.string().max(100) // Max length
z.string().regex(/^[A-Z]/) // Regex pattern
z.number().min(0).max(100) // Number range
z.enum(["option1", "option2"]) // Enum
z.boolean() // Boolean
z.date() // Date
z.array(z.string()) // Array
z.object({ ... }) // Nested object
z.string().optional() // Optional field
z.string().nullable() // Nullable field
```

### Custom validation:

```typescript
z.string().refine((val) => val.length >= 8, { message: "Password too short" });

z.object({
  password: z.string(),
  confirm: z.string(),
}).refine((data) => data.password === data.confirm, {
  message: "Passwords don't match",
  path: ["confirm"],
});
```

## Accessibility Checklist

- ✅ Use `<label>` with `htmlFor` attribute
- ✅ Add `aria-invalid` on error
- ✅ Add `aria-describedby` pointing to error message
- ✅ Error messages have `role="alert"`
- ✅ Maintain focus on submit
- ✅ Show loading state during submission
- ✅ Preserve form values on validation error
- ✅ Visual error indicators (red borders)

## Example Complete Form

```typescript
import { Form, useActionData, useNavigation } from "react-router";
import { z } from "zod";
import type { Route } from "./+types/form";

const formSchema = z.object({
email: z.string().email("Invalid email"),
password: z.string().min(8, "Min 8 characters"),
agree: z.literal("on", {
errorMap: () => ({ message: "You must agree" })
}),
});

export async function action({ request }: Route.ActionArgs) {
const formData = await request.formData();
const data = Object.fromEntries(formData);

const result = formSchema.safeParse(data);
if (!result.success) {
return {
errors: result.error.flatten().fieldErrors,
values: data
};
}

await createAccount(result.data);
return redirect("/welcome");
}

export default function SignupForm() {
const actionData = useActionData<typeof action>();
const navigation = useNavigation();
const isSubmitting = navigation.state === "submitting";

return (
<Form method="post" className="max-w-md mx-auto space-y-6 p-6">
{/_ Email field _/}
<FormField
        label="Email"
        name="email"
        type="email"
        error={actionData?.errors?.email?.[0]}
        defaultValue={actionData?.values?.email}
      />

      {/* Password field */}
      <FormField
        label="Password"
        name="password"
        type="password"
        error={actionData?.errors?.password?.[0]}
        defaultValue={actionData?.values?.password}
      />

      {/* Checkbox */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="agree"
          name="agree"
          className="rounded border-gray-300 dark:border-gray-600"
        />
        <label htmlFor="agree" className="text-sm">
          I agree to the terms
        </label>
      </div>
      {actionData?.errors?.agree && (
        <p className="text-sm text-red-600">{actionData.errors.agree[0]}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        {isSubmitting ? "Creating account..." : "Sign Up"}
      </button>
    </Form>

);
}

function FormField({ label, name, type, error, defaultValue }: any) {
return (
<div>
<label htmlFor={name} className="block text-sm font-medium">
{label}
</label>
<input
type={type}
id={name}
name={name}
defaultValue={defaultValue}
aria-invalid={error ? "true" : "false"}
aria-describedby={error ? \`\${name}-error\` : undefined}
className={\`
mt-1 block w-full px-3 py-2 rounded-lg
\${error ? 'border-red-500' : 'border-gray-300'}
\`}
/>
{error && (
<p id={\`\${name}-error\`} className="mt-1 text-sm text-red-600" role="alert">
{error}
</p>
)}
</div>
);
}
```

Reference [react-router-setup](../skills/react-router-setup/SKILL.md) for form handling patterns.

