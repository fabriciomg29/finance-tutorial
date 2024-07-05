import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Loader2 } from "lucide-react";
import { insertAccountSchema } from "@/db/schema";
import { z } from "zod";
import { AccountForm } from "@/features/accounts/components/account-form";
import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";
import { useGetAccount } from "@/features/accounts/api/use-get-account";
import { useEditAccount } from "@/features/accounts/api/use-edit-account";
import { useDeleteAccount } from "../api/use-delete-account";

const formSchema = insertAccountSchema.pick({ name: true });

type FormValues = z.input<typeof formSchema>;

export function EditAccountSheet() {
    const { isOpen, onClose, id } = useOpenAccount();

    const accountQuery = useGetAccount(id);
    const editMutation = useEditAccount(id);
    const deleteMutation = useDeleteAccount(id);

    const isEditPending = editMutation.isPending;
    const isDeletePending = deleteMutation.isPending;

    const isLoading =
        accountQuery.isLoading || isEditPending || isDeletePending;

    const onSubmit = (values: FormValues) => {
        editMutation.mutate(values, {
            onSuccess: () => {
                onClose();
            },
        });
    };

    const onDelete = (id?: string) => {
        deleteMutation.mutate({ param: { id }}, {
            onSuccess: () => {
                onClose();
            },
        });
    };

    const defaultValues = accountQuery.data
        ? {
              name: accountQuery.data.name,
          }
        : {
              name: "",
          };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>Edit Account</SheetTitle>
                </SheetHeader>
                {isLoading ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="size-4 text-muted-foreground animate-spin" />
                    </div>
                ) : (
                    <AccountForm
                        id={id}
                        onSubmit={onSubmit}
                        onDelete={onDelete}
                        disabled={isLoading}
                        defaultValue={defaultValues}
                    />
                )}
            </SheetContent>
        </Sheet>
    );
}
