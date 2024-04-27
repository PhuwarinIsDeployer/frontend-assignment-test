import { useMemo } from "react";
import { User } from "@/app/types/user/user";
import { DepartmentSummary } from "./type";

export function useGroupUsersByDepartment(users: User[]): DepartmentSummary {
  return useMemo(() => {
    const departmentSummary: DepartmentSummary = {};

    users.forEach((user) => {
      const department = user.company.department;
      if (!departmentSummary[department]) {
        departmentSummary[department] = {
          male: 0,
          female: 0,
          ageRange: "XX-XX",
          hair: {},
          addressUser: {},
          users: [], // Initialize the array of users
        };
      }

      // Add the user to the department
      departmentSummary[department].users.push(user);

      // Increment gender count
      if (user.gender === "male") {
        departmentSummary[department].male += 1;
      } else if (user.gender === "female") {
        departmentSummary[department].female += 1;
      }

      // Update age range
      const age = user.age;
      const currentRange = departmentSummary[department].ageRange;
      const [minAge, maxAge] =
        currentRange === "XX-XX"
          ? [Infinity, -Infinity]
          : currentRange.split("-").map(Number);
      const newMinAge = Math.min(minAge, age);
      const newMaxAge = Math.max(maxAge, age);
      departmentSummary[department].ageRange = `${newMinAge}-${newMaxAge}`;

      // Count hair colors
      const hairColor = user.hair.color;
      departmentSummary[department].hair[hairColor] =
        (departmentSummary[department].hair[hairColor] || 0) + 1;

      // Map user name to postal code
      const fullName = user.firstName + user.lastName;
      departmentSummary[department].addressUser[fullName] =
        user.address.postalCode;
    });

    return departmentSummary;
  }, [users]);
}
