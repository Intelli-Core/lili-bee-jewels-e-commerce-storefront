import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type OutlineCardProps = {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export const GenericCard = ({ title, children, footer }: OutlineCardProps) => {
  return (
    <Card className="">
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};
