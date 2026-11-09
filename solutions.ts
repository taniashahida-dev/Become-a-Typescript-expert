function multiplyValue(value: number, multiplier?: number):number{
  if (multiplier === undefined) {
    return value * 2;
  } else {
    return value * multiplier;
  }
}



function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    const value  = input.trim().toLowerCase();
    return value
  } else if (typeof input === "number") {
    const value = input * 10
    return value
  } else{
    if (input) {
      return "Active"
    }
    return "Inactive"
  }
}



function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  return `Location: ${coordinate[2]} (${coordinate[0]},${coordinate[1]})`;
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = []

    for (const arr of arrays) {
        for (const item of arr) {
            result.push(item);
        }
    }
    return result
}


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
function getPopularCourses(Courses: Course[], minStudents: number): Course[] {
  const newArr = Courses.filter(
    (Course) => Course.isPublished === true && Course.students >= minStudents,
  );
  return newArr
}



function pluckValues<T, k extends keyof T>(items: T[], key: k): T[k][] {
  return items.map((item) => item[key]);
}



class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}
class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}



const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
};
