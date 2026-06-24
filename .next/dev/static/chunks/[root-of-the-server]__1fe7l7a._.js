(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CountUp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CountUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CountUp({ to, from = 0, direction = "up", delay = 0, duration = 2, className = "", startWhen = true, separator = "", onStart, onEnd }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const motionValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(direction === "down" ? to : from);
    const damping = 20 + 40 * (1 / duration);
    const stiffness = 100 * (1 / duration);
    const springValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(motionValue, {
        damping,
        stiffness
    });
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "0px"
    });
    const getDecimalPlaces = (num)=>{
        const str = num.toString();
        if (str.includes(".")) {
            const decimals = str.split(".")[1];
            if (parseInt(decimals, 10) !== 0) {
                return decimals.length;
            }
        }
        return 0;
    };
    const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));
    const formatValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CountUp.useCallback[formatValue]": (latest)=>{
            const hasDecimals = maxDecimals > 0;
            const options = {
                useGrouping: !!separator,
                minimumFractionDigits: hasDecimals ? maxDecimals : 0,
                maximumFractionDigits: hasDecimals ? maxDecimals : 0
            };
            const formattedNumber = Intl.NumberFormat("en-US", options).format(latest);
            return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
        }
    }["CountUp.useCallback[formatValue]"], [
        maxDecimals,
        separator
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUp.useEffect": ()=>{
            if (ref.current) {
                ref.current.textContent = formatValue(direction === "down" ? to : from);
            }
        }
    }["CountUp.useEffect"], [
        from,
        to,
        direction,
        formatValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUp.useEffect": ()=>{
            if (!isInView || !startWhen) return;
            onStart?.();
            const timeoutId = setTimeout({
                "CountUp.useEffect.timeoutId": ()=>{
                    motionValue.set(direction === "down" ? from : to);
                }
            }["CountUp.useEffect.timeoutId"], delay * 1000);
            const durationTimeoutId = setTimeout({
                "CountUp.useEffect.durationTimeoutId": ()=>{
                    onEnd?.();
                }
            }["CountUp.useEffect.durationTimeoutId"], (delay + duration) * 1000);
            return ({
                "CountUp.useEffect": ()=>{
                    clearTimeout(timeoutId);
                    clearTimeout(durationTimeoutId);
                }
            })["CountUp.useEffect"];
        }
    }["CountUp.useEffect"], [
        isInView,
        startWhen,
        motionValue,
        direction,
        from,
        to,
        delay,
        duration,
        onStart,
        onEnd
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUp.useEffect": ()=>{
            const unsubscribe = springValue.on("change", {
                "CountUp.useEffect.unsubscribe": (latest)=>{
                    if (ref.current) {
                        ref.current.textContent = formatValue(latest);
                    }
                }
            }["CountUp.useEffect.unsubscribe"]);
            return ({
                "CountUp.useEffect": ()=>unsubscribe()
            })["CountUp.useEffect"];
        }
    }["CountUp.useEffect"], [
        springValue,
        formatValue
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: className
    }, void 0, false, {
        fileName: "[project]/components/CountUp.tsx",
        lineNumber: 133,
        columnNumber: 10
    }, this);
}
_s(CountUp, "AYXSaBwN/l9GyMQgy4mUstgqGuA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = CountUp;
var _c;
__turbopack_context__.k.register(_c, "CountUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TextType.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TextType({ text, as: Component = "div", typingSpeed = 50, initialDelay = 0, pauseDuration = 2000, deletingSpeed = 30, loop = true, className = "", showCursor = true, hideCursorWhileTyping = false, cursorCharacter = "|", cursorClassName = "", cursorBlinkDuration = 0.5, textColors = [], variableSpeed = false, onSentenceComplete, startOnVisible = false, reverseMode = false, ...props }) {
    _s();
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentCharIndex, setCurrentCharIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTextIndex, setCurrentTextIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!startOnVisible);
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TextType.useMemo[textArray]": ()=>Array.isArray(text) ? text : [
                text
            ]
    }["TextType.useMemo[textArray]"], [
        text
    ]);
    const getRandomSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextType.useCallback[getRandomSpeed]": ()=>{
            if (!variableSpeed) return typingSpeed;
            return Math.random() * (variableSpeed.max - variableSpeed.min) + variableSpeed.min;
        }
    }["TextType.useCallback[getRandomSpeed]"], [
        variableSpeed,
        typingSpeed
    ]);
    const getCurrentTextColor = ()=>{
        if (textColors.length === 0) return "inherit";
        return textColors[currentTextIndex % textColors.length];
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextType.useEffect": ()=>{
            if (!startOnVisible || !containerRef.current) return;
            const observer = new IntersectionObserver({
                "TextType.useEffect": (entries)=>{
                    entries.forEach({
                        "TextType.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setIsVisible(true);
                            }
                        }
                    }["TextType.useEffect"]);
                }
            }["TextType.useEffect"], {
                threshold: 0.1
            });
            observer.observe(containerRef.current);
            return ({
                "TextType.useEffect": ()=>observer.disconnect()
            })["TextType.useEffect"];
        }
    }["TextType.useEffect"], [
        startOnVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextType.useEffect": ()=>{
            if (!showCursor || !cursorRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(cursorRef.current, {
                opacity: 1
            });
            const tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursorRef.current, {
                opacity: 0,
                duration: cursorBlinkDuration,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            });
            return ({
                "TextType.useEffect": ()=>{
                    tween.kill();
                }
            })["TextType.useEffect"];
        }
    }["TextType.useEffect"], [
        showCursor,
        cursorBlinkDuration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextType.useEffect": ()=>{
            if (!isVisible) return;
            let timeout;
            const currentText = textArray[currentTextIndex] ?? "";
            const processedText = reverseMode ? currentText.split("").reverse().join("") : currentText;
            const executeTypingAnimation = {
                "TextType.useEffect.executeTypingAnimation": ()=>{
                    if (isDeleting) {
                        if (displayedText === "") {
                            setIsDeleting(false);
                            if (currentTextIndex === textArray.length - 1 && !loop) {
                                return;
                            }
                            onSentenceComplete?.(textArray[currentTextIndex], currentTextIndex);
                            setCurrentTextIndex({
                                "TextType.useEffect.executeTypingAnimation": (prev)=>(prev + 1) % textArray.length
                            }["TextType.useEffect.executeTypingAnimation"]);
                            setCurrentCharIndex(0);
                        } else {
                            timeout = setTimeout({
                                "TextType.useEffect.executeTypingAnimation": ()=>{
                                    setDisplayedText({
                                        "TextType.useEffect.executeTypingAnimation": (prev)=>prev.slice(0, -1)
                                    }["TextType.useEffect.executeTypingAnimation"]);
                                }
                            }["TextType.useEffect.executeTypingAnimation"], deletingSpeed);
                        }
                    } else {
                        if (currentCharIndex < processedText.length) {
                            timeout = setTimeout({
                                "TextType.useEffect.executeTypingAnimation": ()=>{
                                    setDisplayedText({
                                        "TextType.useEffect.executeTypingAnimation": (prev)=>prev + processedText[currentCharIndex]
                                    }["TextType.useEffect.executeTypingAnimation"]);
                                    setCurrentCharIndex({
                                        "TextType.useEffect.executeTypingAnimation": (prev)=>prev + 1
                                    }["TextType.useEffect.executeTypingAnimation"]);
                                }
                            }["TextType.useEffect.executeTypingAnimation"], variableSpeed ? getRandomSpeed() : typingSpeed);
                        } else if (textArray.length > 0) {
                            if (!loop && currentTextIndex === textArray.length - 1) {
                                return;
                            }
                            timeout = setTimeout({
                                "TextType.useEffect.executeTypingAnimation": ()=>{
                                    setIsDeleting(true);
                                }
                            }["TextType.useEffect.executeTypingAnimation"], pauseDuration);
                        }
                    }
                }
            }["TextType.useEffect.executeTypingAnimation"];
            if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
                timeout = setTimeout(executeTypingAnimation, initialDelay);
            } else {
                executeTypingAnimation();
            }
            return ({
                "TextType.useEffect": ()=>clearTimeout(timeout)
            })["TextType.useEffect"];
        }
    }["TextType.useEffect"], [
        currentCharIndex,
        displayedText,
        isDeleting,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
        textArray,
        currentTextIndex,
        loop,
        initialDelay,
        isVisible,
        reverseMode,
        variableSpeed,
        onSentenceComplete,
        getRandomSpeed
    ]);
    const shouldHideCursor = hideCursorWhileTyping && (currentCharIndex < (textArray[currentTextIndex]?.length ?? 0) || isDeleting);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline",
                style: {
                    color: getCurrentTextColor()
                },
                children: displayedText
            }, void 0, false, {
                fileName: "[project]/components/TextType.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            showCursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                ref: cursorRef,
                className: `ml-1 inline-block ${shouldHideCursor ? "hidden" : ""} ${cursorClassName}`,
                children: cursorCharacter
            }, void 0, false, {
                fileName: "[project]/components/TextType.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TextType.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
_s(TextType, "rYuct5oxtZf9EwJat6pbcmgGcHQ=");
_c = TextType;
var _c;
__turbopack_context__.k.register(_c, "TextType");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LogoLoop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoLoop",
    ()=>LogoLoop,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
const ANIMATION_CONFIG = {
    SMOOTH_TAU: 0.25,
    MIN_COPIES: 2,
    COPY_HEADROOM: 2
};
const toCssLength = (value)=>typeof value === "number" ? `${value}px` : value ?? undefined;
const cx = (...parts)=>parts.filter(Boolean).join(" ");
const useResizeObserver = (callback, elements, dependencies)=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResizeObserver.useEffect": ()=>{
            if (!window.ResizeObserver) {
                const handleResize = {
                    "useResizeObserver.useEffect.handleResize": ()=>callback()
                }["useResizeObserver.useEffect.handleResize"];
                window.addEventListener("resize", handleResize);
                callback();
                return ({
                    "useResizeObserver.useEffect": ()=>window.removeEventListener("resize", handleResize)
                })["useResizeObserver.useEffect"];
            }
            const observers = elements.map({
                "useResizeObserver.useEffect.observers": (ref)=>{
                    if (!ref.current) return null;
                    const observer = new ResizeObserver(callback);
                    observer.observe(ref.current);
                    return observer;
                }
            }["useResizeObserver.useEffect.observers"]);
            callback();
            return ({
                "useResizeObserver.useEffect": ()=>{
                    observers.forEach({
                        "useResizeObserver.useEffect": (observer)=>observer?.disconnect()
                    }["useResizeObserver.useEffect"]);
                }
            })["useResizeObserver.useEffect"];
        }
    }["useResizeObserver.useEffect"], [
        callback,
        elements,
        dependencies
    ]);
};
_s(useResizeObserver, "OD7bBpZva5O2jO+Puf00hKivP7c=");
const useImageLoader = (seqRef, onLoad, dependencies)=>{
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useImageLoader.useEffect": ()=>{
            const images = seqRef.current?.querySelectorAll("img") ?? [];
            if (images.length === 0) {
                onLoad();
                return;
            }
            let remainingImages = images.length;
            const handleImageLoad = {
                "useImageLoader.useEffect.handleImageLoad": ()=>{
                    remainingImages -= 1;
                    if (remainingImages === 0) {
                        onLoad();
                    }
                }
            }["useImageLoader.useEffect.handleImageLoad"];
            images.forEach({
                "useImageLoader.useEffect": (img)=>{
                    const htmlImg = img;
                    if (htmlImg.complete) {
                        handleImageLoad();
                    } else {
                        htmlImg.addEventListener("load", handleImageLoad, {
                            once: true
                        });
                        htmlImg.addEventListener("error", handleImageLoad, {
                            once: true
                        });
                    }
                }
            }["useImageLoader.useEffect"]);
            return ({
                "useImageLoader.useEffect": ()=>{
                    images.forEach({
                        "useImageLoader.useEffect": (img)=>{
                            img.removeEventListener("load", handleImageLoad);
                            img.removeEventListener("error", handleImageLoad);
                        }
                    }["useImageLoader.useEffect"]);
                }
            })["useImageLoader.useEffect"];
        }
    }["useImageLoader.useEffect"], [
        onLoad,
        seqRef,
        dependencies
    ]);
};
_s1(useImageLoader, "OD7bBpZva5O2jO+Puf00hKivP7c=");
const useAnimationLoop = (trackRef, targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical)=>{
    _s2();
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastTimestampRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const offsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const velocityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAnimationLoop.useEffect": ()=>{
            const track = trackRef.current;
            if (!track) return;
            const prefersReduced = ("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const seqSize = isVertical ? seqHeight : seqWidth;
            if (seqSize > 0) {
                offsetRef.current = (offsetRef.current % seqSize + seqSize) % seqSize;
                const transformValue = isVertical ? `translate3d(0, ${-offsetRef.current}px, 0)` : `translate3d(${-offsetRef.current}px, 0, 0)`;
                track.style.transform = transformValue;
            }
            if (prefersReduced) {
                track.style.transform = isVertical ? "translate3d(0, 0, 0)" : "translate3d(0, 0, 0)";
                return ({
                    "useAnimationLoop.useEffect": ()=>{
                        lastTimestampRef.current = null;
                    }
                })["useAnimationLoop.useEffect"];
            }
            const animate = {
                "useAnimationLoop.useEffect.animate": (timestamp)=>{
                    if (lastTimestampRef.current === null) {
                        lastTimestampRef.current = timestamp;
                    }
                    const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
                    lastTimestampRef.current = timestamp;
                    const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
                    const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
                    velocityRef.current += (target - velocityRef.current) * easingFactor;
                    if (seqSize > 0) {
                        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
                        nextOffset = (nextOffset % seqSize + seqSize) % seqSize;
                        offsetRef.current = nextOffset;
                        const transformValue = isVertical ? `translate3d(0, ${-offsetRef.current}px, 0)` : `translate3d(${-offsetRef.current}px, 0, 0)`;
                        track.style.transform = transformValue;
                    }
                    rafRef.current = requestAnimationFrame(animate);
                }
            }["useAnimationLoop.useEffect.animate"];
            rafRef.current = requestAnimationFrame(animate);
            return ({
                "useAnimationLoop.useEffect": ()=>{
                    if (rafRef.current !== null) {
                        cancelAnimationFrame(rafRef.current);
                        rafRef.current = null;
                    }
                    lastTimestampRef.current = null;
                }
            })["useAnimationLoop.useEffect"];
        }
    }["useAnimationLoop.useEffect"], [
        targetVelocity,
        seqWidth,
        seqHeight,
        isHovered,
        hoverSpeed,
        isVertical,
        trackRef
    ]);
};
_s2(useAnimationLoop, "CHkB9QIrZTEfgjfB6nwY5WHuHxk=");
const LogoLoop = /*#__PURE__*/ _s3((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s3(({ logos, speed = 120, direction = "left", width = "100%", logoHeight = 28, gap = 32, pauseOnHover, hoverSpeed, fadeOut = false, fadeOutColor, scaleOnHover = false, renderItem, ariaLabel = "Partner logos", className, style })=>{
    _s3();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const seqRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [seqWidth, setSeqWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [seqHeight, setSeqHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [copyCount, setCopyCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const effectiveHoverSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[effectiveHoverSpeed]": ()=>{
            if (hoverSpeed !== undefined) return hoverSpeed;
            if (pauseOnHover === true) return 0;
            if (pauseOnHover === false) return undefined;
            return 0;
        }
    }["LogoLoop.useMemo[effectiveHoverSpeed]"], [
        hoverSpeed,
        pauseOnHover
    ]);
    const isVertical = direction === "up" || direction === "down";
    const targetVelocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[targetVelocity]": ()=>{
            const magnitude = Math.abs(speed);
            let directionMultiplier;
            if (isVertical) {
                directionMultiplier = direction === "up" ? 1 : -1;
            } else {
                directionMultiplier = direction === "left" ? 1 : -1;
            }
            const speedMultiplier = speed < 0 ? -1 : 1;
            return magnitude * directionMultiplier * speedMultiplier;
        }
    }["LogoLoop.useMemo[targetVelocity]"], [
        speed,
        direction,
        isVertical
    ]);
    const updateDimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LogoLoop.useCallback[updateDimensions]": ()=>{
            const containerWidth = containerRef.current?.clientWidth ?? 0;
            const sequenceRect = seqRef.current?.getBoundingClientRect?.();
            const sequenceWidth = sequenceRect?.width ?? 0;
            const sequenceHeight = sequenceRect?.height ?? 0;
            if (isVertical) {
                const parentHeight = containerRef.current?.parentElement?.clientHeight ?? 0;
                if (containerRef.current && parentHeight > 0) {
                    const targetHeight = Math.ceil(parentHeight);
                    if (containerRef.current.style.height !== `${targetHeight}px`) containerRef.current.style.height = `${targetHeight}px`;
                }
                if (sequenceHeight > 0) {
                    setSeqHeight(Math.ceil(sequenceHeight));
                    const viewport = containerRef.current?.clientHeight ?? parentHeight ?? sequenceHeight;
                    const copiesNeeded = Math.ceil(viewport / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM;
                    setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
                }
            } else if (sequenceWidth > 0) {
                setSeqWidth(Math.ceil(sequenceWidth));
                const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
                setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
            }
        }
    }["LogoLoop.useCallback[updateDimensions]"], [
        isVertical
    ]);
    useResizeObserver(updateDimensions, [
        containerRef,
        seqRef
    ], [
        logos,
        gap,
        logoHeight,
        isVertical
    ]);
    useImageLoader(seqRef, updateDimensions, [
        logos,
        gap,
        logoHeight,
        isVertical
    ]);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical);
    const cssVariables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[cssVariables]": ()=>({
                "--logoloop-gap": `${gap}px`,
                "--logoloop-logoHeight": `${logoHeight}px`,
                ...fadeOutColor && {
                    "--logoloop-fadeColor": fadeOutColor
                }
            })
    }["LogoLoop.useMemo[cssVariables]"], [
        gap,
        logoHeight,
        fadeOutColor
    ]);
    const rootClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[rootClasses]": ()=>cx("relative group", isVertical ? "overflow-hidden h-full inline-block" : "overflow-x-hidden", "[--logoloop-gap:32px]", "[--logoloop-logoHeight:28px]", "[--logoloop-fadeColorAuto:#ffffff]", "dark:[--logoloop-fadeColorAuto:#0b0b0b]", scaleOnHover && "py-[calc(var(--logoloop-logoHeight)*0.1)]", className)
    }["LogoLoop.useMemo[rootClasses]"], [
        isVertical,
        scaleOnHover,
        className
    ]);
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LogoLoop.useCallback[handleMouseEnter]": ()=>{
            if (effectiveHoverSpeed !== undefined) setIsHovered(true);
        }
    }["LogoLoop.useCallback[handleMouseEnter]"], [
        effectiveHoverSpeed
    ]);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LogoLoop.useCallback[handleMouseLeave]": ()=>{
            if (effectiveHoverSpeed !== undefined) setIsHovered(false);
        }
    }["LogoLoop.useCallback[handleMouseLeave]"], [
        effectiveHoverSpeed
    ]);
    const renderLogoItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LogoLoop.useCallback[renderLogoItem]": (item, key)=>{
            if (renderItem) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: cx("flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]", isVertical ? "mb-[var(--logoloop-gap)]" : "mr-[var(--logoloop-gap)]", scaleOnHover && "overflow-visible group/item"),
                    role: "listitem",
                    children: renderItem(item, key)
                }, key, false, {
                    fileName: "[project]/components/LogoLoop.tsx",
                    lineNumber: 356,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            }
            const isNodeItem = "node" in item;
            const content = isNodeItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: cx("inline-flex items-center", "motion-reduce:transition-none", scaleOnHover && "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"),
                "aria-hidden": !!item.href && !item.ariaLabel,
                children: item.node
            }, void 0, false, {
                fileName: "[project]/components/LogoLoop.tsx",
                lineNumber: 375,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                className: cx("h-[var(--logoloop-logoHeight)] w-auto block object-contain", "[-webkit-user-drag:none] pointer-events-none", "[image-rendering:-webkit-optimize-contrast]", "motion-reduce:transition-none", scaleOnHover && "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"),
                src: item.src,
                srcSet: item.srcSet,
                sizes: item.sizes,
                width: item.width,
                height: item.height,
                alt: item.alt ?? "",
                title: item.title,
                loading: "lazy",
                decoding: "async",
                draggable: false
            }, void 0, false, {
                fileName: "[project]/components/LogoLoop.tsx",
                lineNumber: 387,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
            const itemAriaLabel = isNodeItem ? item.ariaLabel ?? item.title : item.alt ?? item.title;
            const inner = item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: cx("inline-flex items-center no-underline rounded", "transition-opacity duration-200 ease-linear", "hover:opacity-80", "focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2"),
                href: item.href,
                "aria-label": itemAriaLabel || "logo link",
                target: "_blank",
                rel: "noreferrer noopener",
                children: content
            }, void 0, false, {
                fileName: "[project]/components/LogoLoop.tsx",
                lineNumber: 414,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : content;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: cx("flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]", isVertical ? "mb-[var(--logoloop-gap)]" : "mr-[var(--logoloop-gap)]", scaleOnHover && "overflow-visible group/item"),
                role: "listitem",
                children: inner
            }, key, false, {
                fileName: "[project]/components/LogoLoop.tsx",
                lineNumber: 433,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        }
    }["LogoLoop.useCallback[renderLogoItem]"], [
        isVertical,
        scaleOnHover,
        renderItem
    ]);
    const logoLists = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[logoLists]": ()=>Array.from({
                length: copyCount
            }, {
                "LogoLoop.useMemo[logoLists]": (_, copyIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: cx("flex items-center", isVertical && "flex-col"),
                        role: "list",
                        "aria-hidden": copyIndex > 0,
                        ref: copyIndex === 0 ? seqRef : undefined,
                        children: logos.map({
                            "LogoLoop.useMemo[logoLists]": (item, itemIndex)=>renderLogoItem(item, `${copyIndex}-${itemIndex}`)
                        }["LogoLoop.useMemo[logoLists]"])
                    }, `copy-${copyIndex}`, false, {
                        fileName: "[project]/components/LogoLoop.tsx",
                        lineNumber: 454,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
            }["LogoLoop.useMemo[logoLists]"])
    }["LogoLoop.useMemo[logoLists]"], [
        copyCount,
        logos,
        renderLogoItem,
        isVertical
    ]);
    const containerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[containerStyle]": ()=>({
                width: isVertical ? toCssLength(width) === "100%" ? undefined : toCssLength(width) : toCssLength(width) ?? "100%",
                ...cssVariables,
                ...style
            })
    }["LogoLoop.useMemo[containerStyle]"], [
        width,
        cssVariables,
        style,
        isVertical
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: rootClasses,
        style: containerStyle,
        role: "region",
        "aria-label": ariaLabel,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
            fadeOut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: isVertical ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: cx("pointer-events-none absolute inset-x-0 top-0 z-10", "h-[clamp(24px,8%,120px)]", "bg-[linear-gradient(to_bottom,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")
                        }, void 0, false, {
                            fileName: "[project]/components/LogoLoop.tsx",
                            lineNumber: 496,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: cx("pointer-events-none absolute inset-x-0 bottom-0 z-10", "h-[clamp(24px,8%,120px)]", "bg-[linear-gradient(to_top,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")
                        }, void 0, false, {
                            fileName: "[project]/components/LogoLoop.tsx",
                            lineNumber: 504,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: cx("pointer-events-none absolute inset-y-0 left-0 z-10", "w-[clamp(24px,8%,120px)]", "bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")
                        }, void 0, false, {
                            fileName: "[project]/components/LogoLoop.tsx",
                            lineNumber: 515,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: cx("pointer-events-none absolute inset-y-0 right-0 z-10", "w-[clamp(24px,8%,120px)]", "bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")
                        }, void 0, false, {
                            fileName: "[project]/components/LogoLoop.tsx",
                            lineNumber: 523,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: cx("flex will-change-transform select-none relative z-0", "motion-reduce:transform-none", isVertical ? "flex-col h-max w-full" : "flex-row w-max"),
                ref: trackRef,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                children: logoLists
            }, void 0, false, {
                fileName: "[project]/components/LogoLoop.tsx",
                lineNumber: 536,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/LogoLoop.tsx",
        lineNumber: 483,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "RVu0L+YemxMSJWfZnmFP+1NHcrc=", false, function() {
    return [
        useResizeObserver,
        useImageLoader,
        useAnimationLoop
    ];
})), "RVu0L+YemxMSJWfZnmFP+1NHcrc=", false, function() {
    return [
        useResizeObserver,
        useImageLoader,
        useAnimationLoop
    ];
});
_c1 = LogoLoop;
LogoLoop.displayName = "LogoLoop";
const __TURBOPACK__default__export__ = LogoLoop;
var _c, _c1;
__turbopack_context__.k.register(_c, "LogoLoop$memo");
__turbopack_context__.k.register(_c1, "LogoLoop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/logo.0nb03x48o6fw_.png");}),
"[project]/public/logo.png.mjs { IMAGE => \"[project]/public/logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1536,
    height: 1024,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAa0lEQVR42mWNOwqAMBBEs1lDEgSNhR8sU2kv1hY2YmNlbRHwBBbeR/CaBjT4G1h2GB4zBACIEyJ4jFFOnnKAfVAWqqmreLSe/gApMZiN3s2kN8HR/wKgQpZ3bbQMfbamidA2hVfDNUPPu7MDZIUH63O+Ql4AAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/internal/font/google/merriweather_sans_8fa985f8.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "merriweather_sans_8fa985f8-module__7spxra__className",
});
}),
"[next]/internal/font/google/merriweather_sans_8fa985f8.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$merriweather_sans_8fa985f8$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/merriweather_sans_8fa985f8.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$merriweather_sans_8fa985f8$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Merriweather Sans', 'Merriweather Sans Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$merriweather_sans_8fa985f8$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$merriweather_sans_8fa985f8$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/components/NavBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/logo.png.mjs { IMAGE => "[project]/public/logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$merriweather_sans_8fa985f8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/merriweather_sans_8fa985f8.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Navbar = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "absolute top-0 left-0 w-full z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-6 lg:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "Logo",
                            width: 150,
                            height: 150,
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/components/NavBar.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/NavBar.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `hidden md:text-xl lg:flex items-center gap-8 text-white font-medium ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$merriweather_sans_8fa985f8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/a-propos",
                                className: "transition hover:text-slate-300",
                                children: "À propos"
                            }, void 0, false, {
                                fileName: "[project]/components/NavBar.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/projets",
                                className: "transition hover:text-slate-300",
                                children: "Projets"
                            }, void 0, false, {
                                fileName: "[project]/components/NavBar.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/services",
                                className: "transition hover:text-slate-300",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/components/NavBar.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "transition hover:text-slate-300",
                                children: "Contactez-nous"
                            }, void 0, false, {
                                fileName: "[project]/components/NavBar.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NavBar.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setIsOpen((prev)=>!prev),
                        className: "inline-flex h-11 w-11 items-center justify-center rounded-xl   text-[#E6D65A  ] border-[#D4AF37] drop-shadow-[0_0_4px_rgba(247,245,118,0.6)]   bg-white/60   shadow-sm transition hover:bg-[#FFFBE6] lg:hidden",
                        "aria-label": "Toggle navigation menu",
                        "aria-expanded": isOpen,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-6 w-6",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/NavBar.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/NavBar.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "3",
                                        y1: "7",
                                        x2: "21",
                                        y2: "7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/NavBar.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "3",
                                        y1: "12",
                                        x2: "21",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/NavBar.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "3",
                                        y1: "17",
                                        x2: "21",
                                        y2: "17"
                                    }, void 0, false, {
                                        fileName: "[project]/components/NavBar.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/components/NavBar.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/NavBar.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/NavBar.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$merriweather_sans_8fa985f8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} inset-0 z-50 lg:hidden transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/70",
                        onClick: ()=>setIsOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/components/NavBar.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative mx-6 mt-24 rounded-3xl bg-white p-4 shadow-2xl ring-1 ring-slate-200 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/accueil",
                                onClick: ()=>setIsOpen(false),
                                className: "block rounded-xl px-4 py-3 text-slate-900 font-medium transition hover:bg-slate-100",
                                children: "Accueil"
                            }, void 0, false, {
                                fileName: "[project]/components/NavBar.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/a-propos",
                                onClick: ()=>setIsOpen(false),
                                className: "block rounded-xl px-4 py-3 text-slate-900 font-medium transition hover:bg-slate-100",
                                children: "À propos"
                            }, void 0, false, {
                                fileName: "[project]/components/NavBar.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/projets",
                                onClick: ()=>setIsOpen(false),
                                className: "block rounded-xl px-4 py-3 text-slate-900 font-medium transition hover:bg-slate-100",
                                children: "Projets"
                            }, void 0, false, {
                                fileName: "[project]/components/NavBar.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/services",
                                onClick: ()=>setIsOpen(false),
                                className: "block rounded-xl px-4 py-3 text-slate-900 font-medium transition hover:bg-slate-100",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/components/NavBar.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                onClick: ()=>setIsOpen(false),
                                className: "block rounded-xl px-4 py-3 text-slate-900 font-medium transition hover:bg-slate-100",
                                children: "Contactez-nous"
                            }, void 0, false, {
                                fileName: "[project]/components/NavBar.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NavBar.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/NavBar.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/NavBar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__1fe7l7a._.js.map