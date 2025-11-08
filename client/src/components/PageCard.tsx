import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Eye } from "lucide-react";

interface PageCardProps {
  id: string;
  title: string;
  slug: string;
  status: "published" | "draft";
  lastModified: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onPreview?: () => void;
}

export function PageCard({
  id,
  title,
  slug,
  status,
  lastModified,
  onEdit,
  onDelete,
  onPreview,
}: PageCardProps) {
  return (
    <Card className="overflow-visible" data-testid={`card-page-${id}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-1">
            <CardTitle className="line-clamp-1">{title}</CardTitle>
            <CardDescription className="line-clamp-1">/{slug}</CardDescription>
          </div>
          <Badge
            variant={status === "published" ? "default" : "secondary"}
            data-testid={`badge-status-${id}`}
          >
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardFooter className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm text-muted-foreground" data-testid={`text-modified-${id}`}>
          {lastModified}
        </span>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onPreview}
            data-testid={`button-preview-${id}`}
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onEdit}
            data-testid={`button-edit-${id}`}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onDelete}
            data-testid={`button-delete-${id}`}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
