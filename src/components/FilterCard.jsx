import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

const filterData = [
  {
    filterType: "Job Title",
    array: ["Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "Data Scientist", "UI/UX Designer", "Product Manager", "DevOps Engineer", "Mobile App Developer", "QA Engineer"]
  },
  {
    filterType: "Company",
    array: ["Google", "Microsoft", "Amazon", "Meta", "Netflix", "Adobe", "Airbnb", "Spotify", "Tesla", "Stripe"]
  },
  {
    filterType: "Location",
    array: ["Remote", "San Francisco", "New York", "London", "Berlin", "Toronto", "Bangalore", "Sydney", "Tokyo", "Paris"]
  },
  {
    filterType: "Job Type",
    array: ["Remote", "Full-time", "Part-time", "Internship", "Contract", "Freelance", "Temporary"]
  }
];

const FilterCard = ({ onApply }) => {
  const [filters, setFilters] = useState({
    title: "",
    company: "",
    location: "",
    job_type: "",
    min_ctc: "",
    max_ctc: ""
  });

  const handleChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleClear = () => {
    setFilters({
      title: "",
      company: "",
      location: "",
      job_type: "",
      min_ctc: "",
      max_ctc: ""
    });
  };

  const handleApply = () => {
    onApply(filters);
  };

  return (
    <Card className="w-full h-full p-4 mx-0 shadow-lg rounded-2xl">
      <CardContent className="space-y-4">
        {filterData.map((filter, index) => {
          const key = filter.filterType.toLowerCase().replace(" ", "_");
          return (
            <div key={index}>
              <Label className="text-sm">{filter.filterType}</Label>
              <Select value={filters[key]} onValueChange={(val) => handleChange(key, val)}>
                <SelectTrigger>
                  <SelectValue placeholder={`Select ${filter.filterType}`} />
                </SelectTrigger>
                <SelectContent>
                  {filter.array.map((option, idx) => (
                    <SelectItem key={idx} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          );
        })}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Min CTC</Label>
            <Input
              type="number"
              placeholder="0"
              value={filters.min_ctc}
              onChange={(e) => handleChange("min_ctc", e.target.value)}
            />
          </div>
          <div>
            <Label>Max CTC</Label>
            <Input
              type="number"
              placeholder="100"
              value={filters.max_ctc}
              onChange={(e) => handleChange("max_ctc", e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <Button variant="outline" onClick={handleClear}>
            Clear
          </Button>
          <Button onClick={handleApply}>
            Apply Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterCard;