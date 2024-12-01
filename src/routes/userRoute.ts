/**
 * Sign-up Route
 * Registers a new user to AWS Cognito
 
router.post("/signup", async (req, res) => {
  const { email, password, given_name, family_name, gender, nickname } = req.body;

  const params = {
    ClientId: COGNITO_CLIENT_ID,
    Username: email,
    Password: password,
    UserAttributes: [
      { Name: "email", Value: email },
      { Name: "given_name", Value: given_name },
      { Name: "family_name", Value: family_name },
      { Name: "gender", Value: gender },
      { Name: "nickname", Value: nickname },
    ],
  };

  try {
    const command = new SignUpCommand(params);
    const response = await cognitoClient.send(command);
    logger.info(`User ${email} signed up successfully.`);
    return res.status(201).json({ message: "User registered successfully", response });
  } catch (error) {
    logger.error(`Error during sign up: ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Sign-in Route
 * Authenticates a user via AWS Cognito and returns JWTs
 
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const params = {
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: COGNITO_CLIENT_ID,
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
    },
  };

  try {
    const command = new InitiateAuthCommand(params);
    const response = await cognitoClient.send(command);

    const { AccessToken, IdToken, RefreshToken } = response.AuthenticationResult;

    // Optionally, create a custom JWT for additional roles/claims
    const payload = { email, role: "user" };
    const customToken = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });

    logger.info(`User ${email} logged in successfully.`);
    return res.json({
      AccessToken,
      IdToken,
      RefreshToken,
      CustomToken: customToken, // Optional
    });
  } catch (error) {
    logger.error(`Error during login: ${error.message}`);
    return res.status(401).json({ error: "Invalid credentials" });
  }
});

/**
 * Middleware to Validate JWT
 
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid token" });
  }
};

/**
 * Example of a protected route
 
router.get("/protected", authenticateToken, (req, res) => {
  return res.json({ message: "Access granted to protected route", user: req.user });
});

module.exports = router;
*/