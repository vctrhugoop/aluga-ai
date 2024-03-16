import { hours } from "@/database/hours";
import { Clock } from "@phosphor-icons/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function SelectHours() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <div className="ml-1 flex items-center gap-2">
          <Clock className="h-4 w-4 " />
          <SelectValue placeholder={`Selecione horário`} />
        </div>
      </SelectTrigger>
      <SelectContent>
        {hours.map((hour) => (
          <SelectItem key={hour} value={hour}>
            {hour}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
