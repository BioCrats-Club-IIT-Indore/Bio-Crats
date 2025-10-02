// Validation middleware for signup
const validateSignup = (req, res, next) => {
  const { name, email, password, year, program, jobRole } = req.body;
  const errors = [];

  // Name validation
  if (!name || name.trim().length === 0) {
    errors.push('Name is required');
  } else if (name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  } else if (name.trim().length > 50) {
    errors.push('Name cannot exceed 50 characters');
  }

  // Email validation
  if (!email || email.trim().length === 0) {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Invalid email format');
    }
  }

  // Password validation
  if (!password) {
    errors.push('Password is required');
  } else if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  } else if (password.length > 128) {
    errors.push('Password cannot exceed 128 characters');
  }

  // Year validation
  if (!year) {
    errors.push('Year is required');
  } else {
    const yearNum = parseInt(year);
    const currentYear = new Date().getFullYear();
    if (isNaN(yearNum) || yearNum < 1900 || yearNum > currentYear + 10) {
      errors.push('Invalid year');
    }
  }

  // Program validation
  const validPrograms = ['B.Tech', 'M.Tech', 'PhD', 'MS'];
  if (!program) {
    errors.push('Program is required');
  } else if (!validPrograms.includes(program)) {
    errors.push('Invalid program. Must be one of: B.Tech, M.Tech, PhD, MS');
  }

  // Job role validation
  if (!jobRole || jobRole.trim().length === 0) {
    errors.push('Job role is required');
  } else if (jobRole.trim().length < 2) {
    errors.push('Job role must be at least 2 characters long');
  } else if (jobRole.trim().length > 100) {
    errors.push('Job role cannot exceed 100 characters');
  }

  // If there are validation errors, return them
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: errors[0],
      errors: errors
    });
  }

  // Validation passed, continue to next middleware
  next();
};

// Validation middleware for login
const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  // Email validation
  if (!email || email.trim().length === 0) {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Invalid email format');
    }
  }

  // Password validation
  if (!password) {
    errors.push('Password is required');
  }

  // If there are validation errors, return them
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: errors[0],
      errors: errors
    });
  }

  next();
};

// Validation middleware for profile update
const validateProfileUpdate = (req, res, next) => {
  const { name, year, program, jobRole } = req.body;
  const errors = [];

  // Only validate if field is provided
  if (name !== undefined) {
    if (name.trim().length === 0) {
      errors.push('Name cannot be empty');
    } else if (name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long');
    } else if (name.trim().length > 50) {
      errors.push('Name cannot exceed 50 characters');
    }
  }

  if (year !== undefined) {
    const yearNum = parseInt(year);
    const currentYear = new Date().getFullYear();
    if (isNaN(yearNum) || yearNum < 1900 || yearNum > currentYear + 10) {
      errors.push('Invalid year');
    }
  }

  if (program !== undefined) {
    const validPrograms = ['B.Tech', 'M.Tech', 'PhD', 'MS'];
    if (!validPrograms.includes(program)) {
      errors.push('Invalid program. Must be one of: B.Tech, M.Tech, PhD, MS');
    }
  }

  if (jobRole !== undefined) {
    if (jobRole.trim().length === 0) {
      errors.push('Job role cannot be empty');
    } else if (jobRole.trim().length < 2) {
      errors.push('Job role must be at least 2 characters long');
    } else if (jobRole.trim().length > 100) {
      errors.push('Job role cannot exceed 100 characters');
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: errors[0],
      errors: errors
    });
  }

  next();
};

// export default{
//   validateSignup,
//   validateLogin,
//   validateProfileUpdate
// };
export {
  validateSignup,
  validateLogin,
  validateProfileUpdate
};