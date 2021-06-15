const tenantguid = "26c73ef2-d888-4172-8ae2-9c64d508b5c4";

class Service {
  async getStatuses() {
    const res = await fetch(
      `http://intravision-task.test01.intravision.ru/api/${tenantguid}/Statuses`
    );
    const result = await res.json();
    return result;
  }
  async getPriorities() {
    const res = await fetch(
      ` http://intravision-task.test01.intravision.ru/api/${tenantguid}/Priorities`
    );
    const result = await res.json();
    return result;
  }
  async getUsers() {
    const res = await fetch(
      `http://intravision-task.test01.intravision.ru/api/ ${tenantguid}/Users`
    );
    const result = await res.json();
    return result;
  }

  async getApplications() {
    const res = await fetch(
      ` http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid={${tenantguid}}`
    );
    const result = await res.json();
    return result.value;
  }
  async postApplication(obj) {
    const res = await fetch(
      `http://intravision-task.test01.intravision.ru/api/${tenantguid}/Tasks`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    return res;
  }
  async putApplication(obj) {
    const res = await fetch(
      `http://intravision-task.test01.intravision.ru/api/${tenantguid}/Tasks`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    return res;
  }
}

export default Service;
