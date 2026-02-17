// const express = require("express");

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());

// // ==============================
// // Fake Databases
// // ==============================
// let products = [
//   { id: 1, title: "Backpack", price: 109.95, category: "men's clothing" },
//   { id: 2, title: "T-Shirt", price: 22.3, category: "men's clothing" },
//   { id: 3, title: "Jacket", price: 55.99, category: "women's clothing" }
// ];

// let users = [
//   { id: 1, name: "Trikam", role: "student", age: 20 },
//   { id: 2, name: "Devasi", role: "developer", age: 25 }
  
// ];

// // ==================================================
// // Home route
// // ==================================================
// app.get("/", (req, res) => {
//   res.send("✅ API is running");
// });

// // ==================================================
// // PRODUCTS CRUD
// // ==================================================

// // 1️⃣ GET /all - Get all products
// app.get("/all", (req, res) => {
//   res.json(products);
// });

// // 2️⃣ GET /product/:id - Get single product by ID
// app.get("/product/:id", (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   if (isNaN(id)) return res.status(400).json({ message: "Invalid product ID" });

//   const product = products.find(p => p.id === id);
//   if (!product) return res.status(404).json({ message: "Product not found" });

//   res.json(product);
// });

// // 3️⃣ POST /product - Add single product
// app.post("/product", (req, res) => {
//   const { title, price, category } = req.body;
//   if (!title || !price || !category) {
//     return res.status(400).json({ message: "Missing fields" });
//   }

//   const id = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
//   const product = { id, title, price, category };
//   products.push(product);

//   res.status(201).json(product);
// });

// // 4️⃣ GET /category/:type - Filter by category
// app.get("/category/:type", (req, res) => {
//   const type = req.params.type.toLowerCase();
//   const filtered = products.filter(p => p.category.toLowerCase() === type);
//   res.json(filtered);
// });

// // 5️⃣ POST /products - Add multiple products
// app.post("/products", (req, res) => {
//   if (!Array.isArray(req.body)) {
//     return res.status(400).json({ message: "Send array of products" });
//   }

//   let nextId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
//   const formatted = [];

//   for (const p of req.body) {
//     if (!p.title || !p.price || !p.category) continue;
//     formatted.push({ id: nextId++, title: p.title, price: p.price, category: p.category });
//   }

//   products.push(...formatted);

//   res.status(201).json({
//     message: "Products added",
//     count: formatted.length,
//     products: formatted
//   });
// });

// // 6️⃣ PUT /product/:id - Update product by ID
// app.put("/product/:id", (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   if (isNaN(id)) return res.status(400).json({ message: "Invalid product ID" });

//   const productIndex = products.findIndex(p => p.id === id);
//   if (productIndex === -1) return res.status(404).json({ message: "Product not found" });

//   const { title, price, category } = req.body;
//   if (!title || !price || !category) {
//     return res.status(400).json({ message: "Missing fields" });
//   }

//   products[productIndex] = { id, title, price, category };
//   res.json({ message: "Product updated successfully", product: products[productIndex] });
// });

// // 7️⃣ DELETE /product/:id - Delete product by ID
// app.delete("/product/:id", (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   if (isNaN(id)) return res.status(400).json({ message: "Invalid product ID" });

//   const productIndex = products.findIndex(p => p.id === id);
//   if (productIndex === -1) return res.status(404).json({ message: "Product not found" });

//   const deleted = products.splice(productIndex, 1);
//   res.json({ message: "Product deleted successfully", product: deleted[0] });
// });

// // ==================================================
// // USERS CRUD
// // ==================================================

// // GET all users
// app.get("/users", (req, res) => {
//   res.json(users);
// });

// // GET single user
// app.get("/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find(u => u.id === id);
//   if (!user) return res.status(404).json({ message: "User not found" });
//   res.json(user);
// });

// // POST new user
// app.post("/users", (req, res) => {
//   const { name, role, age } = req.body;
//   if (!name || !role || !age) return res.status(400).json({ message: "Missing fields" });

//   const id = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
//   const user = { id, name, role, age };
//   users.push(user);

//   res.status(201).json(user);
// });

// app.get("/user", (req, res) => {
//   res.json(users);
// });


// // PATCH update user (partial update)
// app.patch("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const user = users.find(u => u.id === userId);

//   if (!user) return res.status(404).json({ message: "User not found" });

//   if (req.body.name) user.name = req.body.name;
//   if (req.body.role) user.role = req.body.role;
//   if (req.body.age) user.age = req.body.age;

//   res.status(200).json({ message: "User updated", user });
// });

// // DELETE user
// app.delete("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const index = users.findIndex(u => u.id === userId);

//   if (index === -1) return res.status(404).json({ message: "User not found" });

//   const deleted = users.splice(index, 1);
//   res.json({ message: "User deleted", user: deleted[0] });
// });

// // ==================================================
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

// const express = require("express");

// const app = express();
// const PORT = process.env.PORT || 3000;

// /* ---------------- MIDDLEWARE ---------------- */
// app.use(express.json());

// /* ---------------- DATA ---------------- */
// const users = [
//   { name: "ABDUL HAQUE", university: "SUxCG 714", uid: "108444", totalSubjects:14, bonus:20, attendance:80 },
//   { name: "ADITYA KUMAR", university: "SUxCG 702", uid: "108716", totalSubjects:14, bonus:20, attendance:80 },
//   { name: "AMAN KUMAR", university: "SUxCG 702", uid: "108500", totalSubjects:14, bonus:20, attendance:80 },
//   { name: "AMRIT RAJ", university: "SUxCG 702", uid: "108587", totalSubjects:14, bonus:20, attendance:80 }
// ];

// /* ---------------- ROUTES ---------------- */
// // Get student by UID
// app.get("/user/:uid", (req, res) => {
//   const { uid } = req.params;

//   // validation
//   if (!/^\d+$/.test(uid)) {
//     return res.status(400).json({ error: "Invalid UID format" });
//   }

//   const student = users.find(s => s.uid === uid);

//   if (!student) {
//     return res.status(404).json({ error: "Student not found" });
//   }

//   res.json(student);
// });
// app.post("/user", (req, res) => {
//   const { uid } = req.body;

//   // validation
//   if (!/^\d+$/.test(uid)) {
//     return res.status(400).json({ error: "Invalid UID format" });
//   }

//   const student = users.find(s => s.uid === uid);

//   if (!student) {
//     return res.status(404).json({ error: "Student not found" });
//   }

//   res.json(student);
// });

// app.put("/user/:uid", (req, res) => {
//   const { uid } = req.params;
//   const { name, university, totalSubjects, bonus, attendance } = req.body;

//   // validation
//   if (!/^\d+$/.test(uid)) {
//     return res.status(400).json({ error: "Invalid UID format" });
//   }

//   const student = users.find(s => s.uid === uid);

//   if (!student) {
//     return res.status(404).json({ error: "Student not found" });
//   }

//   student.name = name;
//   student.university = university;
//   student.totalSubjects = totalSubjects;
//   student.bonus = bonus;
//   student.attendance = attendance;

//   res.json(student);
// });



// /* ---------------- 404 HANDLER ---------------- */
// app.use((req, res) => {
//   res.status(404).json({ error: "Route not found" });
// });


// /* ---------------- SERVER ---------------- */
// app.listen(PORT, () => {
//   console.log(`Server running → http://localhost:${PORT}`);
// });

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

/* ---------------- MIDDLEWARE ---------------- */
app.use(express.json());

/* ---------------- DATA ---------------- */
const users = [
  { name: "ABDUL HAQUE", university: "SUxCG 714", uid: "108444", totalSubjects: 14, bonus: 20, attendance: 80 },
  { name: "ADITYA KUMAR", university: "SUxCG 702", uid: "108716", totalSubjects: 14, bonus: 20, attendance: 80 },
  { name: "AMAN KUMAR", university: "SUxCG 702", uid: "108500", totalSubjects: 14, bonus: 20, attendance: 80 },
  { name: "AMRIT RAJ", university: "SUxCG 702", uid: "108587", totalSubjects: 14, bonus: 20, attendance: 80 }
];

/* ---------------- HELPERS ---------------- */
function findStudent(uid) {
  if (!/^\d+$/.test(uid)) {
    return { error: "Invalid UID format", status: 400 };
  }
  const student = users.find(s => s.uid === uid);
  if (!student) {
    return { error: "Student not found", status: 404 };
  }
  return { student, status: 200 };
}

/* ---------------- ROUTES ---------------- */
// Get all students (list endpoint)
app.get("/users", (req, res) => {
  res.json(users);
});

// Get student by UID
app.get("/user/:uid", (req, res) => {
  const result = findStudent(req.params.uid);
  if (result.error) return res.status(result.status).json({ error: result.error });
  res.json(result.student);
});

// Find student by UID in request body
app.post("/user", (req, res) => {
  const result = findStudent(req.body.uid);
  if (result.error) return res.status(result.status).json({ error: result.error });
  res.json(result.student);
});

// Update student details (partial update allowed)
app.put("/user/:uid", (req, res) => {
  const result = findStudent(req.params.uid);
  if (result.error) return res.status(result.status).json({ error: result.error });

  const student = result.student;

  // Update only provided fields
  Object.keys(req.body).forEach(key => {
    if (student.hasOwnProperty(key) && req.body[key] !== undefined) {
      student[key] = req.body[key];
    }
  });

  res.json(student);
});

// Create new student
app.post("/user/new", (req, res) => {
  const { name, university, uid, totalSubjects, bonus, attendance } = req.body;

  if (!uid || !/^\d+$/.test(uid)) {
    return res.status(400).json({ error: "Invalid UID format" });
  }

  if (users.find(s => s.uid === uid)) {
    return res.status(409).json({ error: "Student already exists" });
  }

  const newStudent = { name, university, uid, totalSubjects, bonus, attendance };
  users.push(newStudent);
  res.status(201).json(newStudent);
});

/* ---------------- 404 HANDLER ---------------- */
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

/* ---------------- SERVER ---------------- */
app.listen(PORT, () => {
  console.log(`Server running → http://localhost:${PORT}`);
});
