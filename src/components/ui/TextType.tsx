'use client';

import React, {
  type ElementType,
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { gsap } from 'gsap';

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[] | React.ReactNode;
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

const TextType = React.forwardRef<
  HTMLElement,
  TextTypeProps & React.HTMLAttributes<HTMLElement>
>(
  (
    {
      text,
      as: Component = 'div',
      typingSpeed = 50,
      initialDelay = 0,
      pauseDuration = 2000,
      deletingSpeed = 30,
      loop = true,
      className = '',
      showCursor = true,
      hideCursorWhileTyping = false,
      cursorCharacter = '|',
      cursorClassName = '',
      cursorBlinkDuration = 0.5,
      textColors = [],
      variableSpeed,
      onSentenceComplete,
      startOnVisible = false,
      reverseMode = false,
      ...props
    },
    containerRef: React.Ref<HTMLElement>
  ) => {
    const [displayedText, setDisplayedText] = useState<string>('');
    const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(!startOnVisible);
    const [mounted, setMounted] = useState<boolean>(false);
    
    const cursorRef = useRef<HTMLSpanElement>(null);
    const internalContainerRef = useRef<HTMLElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Ensure component is mounted
    useEffect(() => {
      setMounted(true);
    }, []);

    // Merge forwarded ref
    useEffect(() => {
      if (containerRef) {
        if (typeof containerRef === 'function') {
          containerRef(internalContainerRef.current);
        } else {
          containerRef.current = internalContainerRef.current;
        }
      }
    }, [containerRef]);

    const textArray = useMemo(() => {
      if (Array.isArray(text)) {
        return text.map((t) => String(t));
      }
      return [String(text)];
    }, [text]);

    const getRandomSpeed = useCallback((): number => {
      if (!variableSpeed) return typingSpeed;
      const { min, max } = variableSpeed;
      return Math.random() * (max - min) + min;
    }, [variableSpeed, typingSpeed]);

    const getCurrentTextColor = (): string => {
      if (textColors.length === 0) return 'inherit';
      return textColors[currentTextIndex % textColors.length];
    };

    // Intersection Observer
    useEffect(() => {
      if (!startOnVisible || !internalContainerRef.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(internalContainerRef.current);
      return () => observer.disconnect();
    }, [startOnVisible]);

    // Cursor Animation
    useEffect(() => {
      if (showCursor && cursorRef.current) {
        gsap.set(cursorRef.current, { opacity: 1 });
        gsap.to(cursorRef.current, {
          opacity: 0,
          duration: cursorBlinkDuration,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
        });
      }

      return () => {
        if (cursorRef.current) {
          gsap.killTweensOf(cursorRef.current);
        }
      };
    }, [showCursor, cursorBlinkDuration]);

    // Main typing logic
    useEffect(() => {
      if (!mounted || !isVisible || textArray.length === 0) return;

      const currentText = textArray[currentTextIndex];
      const processedText = reverseMode
        ? currentText.split('').reverse().join('')
        : currentText;

      const scheduleNextStep = (): void => {
        if (isDeleting) {
          if (displayedText === '') {
            // Finished deleting, move to next text
            setIsDeleting(false);

            if (currentTextIndex === textArray.length - 1 && !loop) {
              return;
            }

            if (onSentenceComplete) {
              onSentenceComplete(currentText, currentTextIndex);
            }

            setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
            setCurrentCharIndex(0);

            // Pause before typing next
            timeoutRef.current = setTimeout(() => {
              // Trigger next animation step
            }, pauseDuration);
          } else {
            // Continue deleting
            const delay = deletingSpeed;
            timeoutRef.current = setTimeout(() => {
              setDisplayedText((prev) => prev.slice(0, -1));
            }, delay);
          }
        } else {
          if (currentCharIndex < processedText.length) {
            // Continue typing
            const delay = variableSpeed ? getRandomSpeed() : typingSpeed;
            timeoutRef.current = setTimeout(() => {
              setDisplayedText((prev) => prev + processedText[currentCharIndex]);
              setCurrentCharIndex((prev) => prev + 1);
            }, delay);
          } else {
            // Finished typing
            if (textArray.length === 1 && !loop) {
              return;
            }

            // Pause before deleting
            timeoutRef.current = setTimeout(() => {
              setIsDeleting(true);
            }, pauseDuration);
          }
        }
      };

      // Initial delay only on first character
      if (currentCharIndex === 0 && displayedText === '' && !isDeleting) {
        timeoutRef.current = setTimeout(scheduleNextStep, initialDelay);
      } else {
        scheduleNextStep();
      }

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, [
      mounted,
      isVisible,
      textArray,
      currentTextIndex,
      displayedText,
      currentCharIndex,
      isDeleting,
      reverseMode,
      loop,
      initialDelay,
      pauseDuration,
      typingSpeed,
      deletingSpeed,
      variableSpeed,
      getRandomSpeed,
      onSentenceComplete,
    ]);

    const shouldHideCursor: boolean =
      hideCursorWhileTyping &&
      (textArray[currentTextIndex].length > currentCharIndex || isDeleting);

    const content = (
      <>
        <span
          className="inline"
          style={{ color: getCurrentTextColor() || 'inherit' }}
        >
          {displayedText}
        </span>
        {showCursor && (
          <span
            ref={cursorRef}
            className={`ml-1 inline-block opacity-100 ${
              shouldHideCursor ? 'hidden' : ''
            } ${cursorClassName}`}
          >
            {cursorCharacter}
          </span>
        )}
      </>
    );

    const elementProps = {
      ref: internalContainerRef,
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    };

    if (typeof Component === 'string') {
      return React.createElement(Component as any, elementProps, content);
    }

    return React.createElement(Component as any, elementProps, content);
  }
);

TextType.displayName = 'TextType';

export default TextType;