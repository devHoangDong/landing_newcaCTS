import React from 'react';
/* eslint react/prop-types: 0 */
import styles from './nav.module.scss';

const Nav = (props) => {
    const dots = [];
    for (let i = 1; i <= props.totalSteps; i += 1) {
        const isActive = props.currentStep === i;
        dots.push((
            <span
                key={`step-${i}`}
                className={`${styles.dot} ${isActive ? styles.active : ''}`}
            >Step {i}<span></span></span>
        ));
    }

    return (
        <div className={styles.nav}>{dots}</div>
    );
};

export default Nav;

// To fix the dependency tree, try following the steps below in the exact order:

//   1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
//   2. Delete node_modules in your project folder.
//   3. Remove "webpack" from dependencies and/or devDependencies in the package.json file in your project folder.
//   4. Run npm install or yarn, depending on the package manager you use.

// In most cases, this should be enough to fix the problem.
// If this has not helped, there are a few other things you can try:

//   5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead.
//      This may help because npm has known issues with package hoisting which may get resolved in future versions.

//   6. Check if /Users/macos/Desktop/thuctap/LANDING_NEWCA/landing-page-newca/node_modules/webpack is outside your project directory.
//      For example, you might have accidentally installed something in your home folder.

//   7. Try running npm ls webpack in your project folder.
//      This will tell you which other package (apart from the expected react-scripts) installed webpack.

// If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
// That would permanently disable this preflight check in case you want to proceed anyway.