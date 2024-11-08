"use client";

import React from "react";
import { Form } from "./ui/form";
import { Button } from "./ui/button";
import { formSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import { z } from "zod";
import { Loader2 } from "lucide-react";

const FormExampleComponent = ({
	user,
}: {
	user?: z.infer<typeof formSchema>;
}) => {
	const [isLoading, setIsLoading] = React.useState(false);

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: user
			? {
					id: user.id,
					username: user.username,
					email: user.email,
					password: user.password,
			  }
			: {
					username: "",
					email: "",
					password: "",
			  },
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		try {
			setIsLoading(true);

			if (user) {
				// await axios.patch('/api/user/${user.id}, values)
			} else {
				// await axios.post('/api/user, values)
			}
			console.log(values);
		} catch (error) {
			if (error instanceof z.ZodError) {
				console.log("Zod_Valditaion", error);
			}
			console.log("Error submitting form", error);
		} finally {
			setIsLoading(false);
			// form.reset();
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<CustomInput
					control={form.control}
					name={"username"}
					label={"Username"}
					placeholder={"JohnDoe123"}
					type={"text"}
				/>

				<CustomInput
					control={form.control}
					name={"email"}
					label={"Email"}
					placeholder={"john123@gmail.com"}
					type={"email"}
				/>

				<CustomInput
					control={form.control}
					name={"password"}
					label={"Password"}
					placeholder={"●●●●●●"}
					type={"password"}
				/>

				<Button disabled={isLoading} type="submit">
					{isLoading ? (
						<>
							<Loader2 size={20} className="animate-spin" />
							&nbsp;Loading...
						</>
					) : (
						<>{user ? "Update user" : "Create new account"}</>
					)}
				</Button>
			</form>
		</Form>
	);
};

export default FormExampleComponent;
